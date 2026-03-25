"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processVideoJob = processVideoJob;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const ffmpeg_static_1 = __importDefault(require("ffmpeg-static"));
// @ts-expect-error
const ffprobe_static_1 = __importDefault(require("ffprobe-static"));
const frames_1 = require("./frames");
const db_1 = require("./db");
const blob_1 = require("@vercel/blob");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
// Initialize system-level binaries natively
fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_static_1.default);
fluent_ffmpeg_1.default.setFfprobePath(ffprobe_static_1.default.path);
function createItemVideo(imagePath, audioPath, outPath, delaySec) {
    return new Promise((resolve, reject) => {
        (0, fluent_ffmpeg_1.default)()
            .input(imagePath)
            .loop()
            .input(audioPath)
            .complexFilter([
            {
                filter: "aformat",
                options: "sample_rates=24000:channel_layouts=mono",
                inputs: "1:a",
                outputs: ["afmt"],
            },
            {
                filter: "asplit",
                options: 2,
                inputs: "afmt",
                outputs: ["a1", "a2"],
            },
            {
                filter: "anullsrc",
                options: { r: 24000, cl: "mono", d: delaySec },
                outputs: ["silence"],
            },
            {
                filter: "concat",
                options: { n: 3, v: 0, a: 1 },
                inputs: ["a1", "silence", "a2"],
                outputs: ["aout"],
            },
        ])
            .outputOptions([
            "-map 0:v",
            "-map [aout]",
            "-c:v libx264",
            "-preset ultrafast",
            "-tune stillimage",
            "-threads 1",
            "-r 15",
            "-c:a aac",
            "-pix_fmt yuv420p",
            "-shortest",
        ])
            .save(outPath)
            .on("end", () => resolve())
            .on("error", (err) => {
            console.error(`ffmpeg error for ${outPath}:`, err);
            reject(err);
        });
    });
}
function concatVideos(videoPaths, outPath, tempDir) {
    return new Promise(async (resolve, reject) => {
        // Write the native FFmpeg concat demuxer format into a temporary text file
        const listPath = path_1.default.join(tempDir, "concat_list.txt");
        const listContent = videoPaths
            .map((v) => `file '${v.replace(/'/g, "'\\''")}'`)
            .join("\n");
        try {
            await promises_1.default.writeFile(listPath, listContent);
            (0, fluent_ffmpeg_1.default)()
                .input(listPath)
                .inputOptions(["-f concat", "-safe 0"])
                .outputOptions(["-c copy"])
                .save(outPath)
                .on("end", () => resolve())
                .on("error", (err) => {
                console.error("Concat Demuxer Error:", err);
                reject(err);
            });
        }
        catch (e) {
            reject(e);
        }
    });
}
async function processVideoJob(request) {
    const { jobId, delaySeconds, items } = request;
    const tempDir = path_1.default.join(os_1.default.tmpdir(), `contly-${jobId}`);
    try {
        await promises_1.default.mkdir(tempDir, { recursive: true });
        await db_1.prisma.videoJob.update({
            where: { id: jobId },
            data: { status: "PROCESSING" },
        });
        const generatedVideos = [];
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            console.log(`[Job ${jobId}] Downloading audio natively for word ${i + 1}...`);
            const res = await fetch(item.audioUrl);
            if (!res.ok) {
                throw new Error(`Cloud audio fetch failed for item ${item.id}`);
            }
            const arrayBuffer = await res.arrayBuffer();
            const audioPath = path_1.default.join(tempDir, `item_${i}.mp3`);
            await promises_1.default.writeFile(audioPath, Buffer.from(arrayBuffer));
            const framePath = path_1.default.join(tempDir, `item_${i}.png`);
            await (0, frames_1.generateFrame)(item.arabicPrimary, item.english, framePath);
            const videoPath = path_1.default.join(tempDir, `item_${i}.mp4`);
            console.log(`[Job ${jobId}] Encoding video identically via ffmpeg...`);
            await createItemVideo(framePath, audioPath, videoPath, delaySeconds);
            generatedVideos.push(videoPath);
            // Manual memory purge trigger interval since this runs in a separate Node pool
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
        if (generatedVideos.length === 0) {
            throw new Error("No items to process");
        }
        const finalVideoPath = path_1.default.join(tempDir, `final_${jobId}.mp4`);
        console.log(`[Job ${jobId}] Synthesizing unified MP4 stream...`);
        await concatVideos(generatedVideos, finalVideoPath, tempDir);
        const finalBuffer = await promises_1.default.readFile(finalVideoPath);
        console.log(`[Job ${jobId}] Uploading finalized multi-part chunk to Vercel Blob...`);
        // Vercel Blob SDK configured for manual upload without front-end proxies
        const blob = await (0, blob_1.put)(`videos/contly_${jobId}.mp4`, finalBuffer, {
            access: "public",
            contentType: "video/mp4",
            multipart: true,
            token: process.env.BLOB_READ_WRITE_TOKEN,
        });
        await db_1.prisma.videoJob.update({
            where: { id: jobId },
            data: {
                status: "READY",
                videoUrl: blob.url,
            },
        });
        console.log(`[Job ${jobId}] Sequence successfully verified and uploaded! ${blob.url}`);
    }
    catch (error) {
        console.error(`[Job ${jobId}] Pipeline FAILED:`, error);
        await db_1.prisma.videoJob.update({
            where: { id: jobId },
            data: {
                status: "FAILED",
                error: error.message || "An unknown error occurred",
            },
        }).catch(() => { });
    }
    finally {
        try {
            await promises_1.default.rm(tempDir, { recursive: true, force: true });
        }
        catch {
            // ignore cleanup errors
        }
    }
}
