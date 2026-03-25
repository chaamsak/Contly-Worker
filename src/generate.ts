import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
// @ts-expect-error
import ffprobeStatic from "ffprobe-static";
import { generateFrame } from "./frames";
import { GenerateRequest } from "./types";
import { prisma } from "./db";
import { put } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";
import os from "os";

// Initialize system-level binaries natively
ffmpeg.setFfmpegPath(ffmpegStatic as string);
ffmpeg.setFfprobePath(ffprobeStatic.path);

function createItemVideo(
  imagePath: string,
  audioPath: string,
  outPath: string,
  delaySec: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg()
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

function concatVideos(
  videoPaths: string[],
  outPath: string,
  tempDir: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const cmd = ffmpeg();
    videoPaths.forEach((v) => cmd.input(v));

    cmd
      .on("error", (err) => reject(err))
      .on("end", () => resolve())
      .mergeToFile(outPath, tempDir);
  });
}

export async function processVideoJob(request: GenerateRequest) {
  const { jobId, delaySeconds, items } = request;
  const tempDir = path.join(os.tmpdir(), `contly-${jobId}`);

  try {
    await fs.mkdir(tempDir, { recursive: true });

    await prisma.videoJob.update({
      where: { id: jobId },
      data: { status: "PROCESSING" },
    });

    const generatedVideos: string[] = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      console.log(`[Job ${jobId}] Downloading audio natively for word ${i + 1}...`);
      const res = await fetch(item.audioUrl);
      if (!res.ok) {
        throw new Error(`Cloud audio fetch failed for item ${item.id}`);
      }
      const arrayBuffer = await res.arrayBuffer();

      const audioPath = path.join(tempDir, `item_${i}.mp3`);
      await fs.writeFile(audioPath, Buffer.from(arrayBuffer));

      const framePath = path.join(tempDir, `item_${i}.png`);
      await generateFrame(item.arabicPrimary, item.english, framePath);

      const videoPath = path.join(tempDir, `item_${i}.mp4`);
      console.log(`[Job ${jobId}] Encoding video identically via ffmpeg...`);
      await createItemVideo(framePath, audioPath, videoPath, delaySeconds);

      generatedVideos.push(videoPath);

      // Manual memory purge trigger interval since this runs in a separate Node pool
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (generatedVideos.length === 0) {
      throw new Error("No items to process");
    }

    const finalVideoPath = path.join(tempDir, `final_${jobId}.mp4`);
    console.log(`[Job ${jobId}] Synthesizing unified MP4 stream...`);
    await concatVideos(generatedVideos, finalVideoPath, tempDir);

    const finalBuffer = await fs.readFile(finalVideoPath);
    console.log(`[Job ${jobId}] Uploading finalized multi-part chunk to Vercel Blob...`);
    
    // Vercel Blob SDK configured for manual upload without front-end proxies
    const blob = await put(`videos/contly_${jobId}.mp4`, finalBuffer, {
      access: "public",
      contentType: "video/mp4",
      multipart: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    await prisma.videoJob.update({
      where: { id: jobId },
      data: {
        status: "READY",
        videoUrl: blob.url,
      },
    });
    console.log(`[Job ${jobId}] Sequence successfully verified and uploaded! ${blob.url}`);
  } catch (error: any) {
    console.error(`[Job ${jobId}] Pipeline FAILED:`, error);
    await prisma.videoJob.update({
      where: { id: jobId },
      data: {
        status: "FAILED",
        error: error.message || "An unknown error occurred",
      },
    }).catch(() => {});
  } finally {
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch {
      // ignore cleanup errors
    }
  }
}
