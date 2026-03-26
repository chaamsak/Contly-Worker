"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFrame = generateFrame;
const canvas_1 = require("@napi-rs/canvas");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
// Initialize the exact Arabic TrueType font physical binaries globally
const fontPath = path_1.default.join(__dirname, "..", "assets", "NotoNaskhArabic-Regular.ttf");
try {
    canvas_1.GlobalFonts.registerFromPath(fontPath, "Noto Naskh Arabic");
}
catch (e) {
    console.warn("Font registration warning:", e);
}
async function generateFrame(arabicText, englishText, outPath) {
    let canvas = (0, canvas_1.createCanvas)(1280, 720);
    const ctx = canvas.getContext("2d");
    // Dynamically inject the user's high-definition background image design
    const bgPath = path_1.default.join(__dirname, "..", "assets", "background.png");
    try {
        const bgImage = await (0, canvas_1.loadImage)(bgPath);
        ctx.drawImage(bgImage, 0, 0, 1280, 720);
    }
    catch (e) {
        console.error("BG load failure at:", bgPath, e);
        // Graceful fallback
        ctx.fillStyle = "#111827";
        ctx.fillRect(0, 0, 1280, 720);
    }
    // Paint the classic 40% opacity drop-shadow layer to drastically increase Arabic typography contrast
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (englishText) {
        ctx.fillStyle = "#ffffff";
        ctx.font = '72px "Noto Naskh Arabic"';
        ctx.fillText(arabicText, 640, 300);
        ctx.fillStyle = "#e5e7eb";
        ctx.font = '36px "Arial", sans-serif';
        ctx.fillText(englishText, 640, 420);
    }
    else {
        ctx.fillStyle = "#ffffff";
        ctx.font = '72px "Noto Naskh Arabic"';
        ctx.fillText(arabicText, 640, 360);
    }
    const buffer = canvas.encodeSync("png");
    await promises_1.default.writeFile(outPath, buffer);
    // Free the native Node.js C++ canvas buffer explicitly
    canvas = null;
}
