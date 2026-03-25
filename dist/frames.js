"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFrame = generateFrame;
const canvas_1 = require("@napi-rs/canvas");
const promises_1 = __importDefault(require("fs/promises"));
async function generateFrame(arabicText, englishText, outPath) {
    let canvas = (0, canvas_1.createCanvas)(1280, 720);
    const ctx = canvas.getContext("2d");
    // Solid white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (englishText) {
        ctx.fillStyle = "#111827";
        ctx.font = '72px "Noto Naskh Arabic", "Arial", sans-serif';
        ctx.fillText(arabicText, 640, 300);
        ctx.fillStyle = "#4B5563";
        ctx.font = '36px "Arial", sans-serif';
        ctx.fillText(englishText, 640, 420);
    }
    else {
        ctx.fillStyle = "#111827";
        ctx.font = '72px "Noto Naskh Arabic", "Arial", sans-serif';
        ctx.fillText(arabicText, 640, 360);
    }
    const buffer = canvas.encodeSync("png");
    await promises_1.default.writeFile(outPath, buffer);
    // Free the native canvas buffer explicitly
    canvas = null;
}
