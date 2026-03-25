import { createCanvas, GlobalFonts, loadImage } from "@napi-rs/canvas";
import fs from "fs/promises";
import path from "path";

// Initialize the exact Arabic TrueType font physical binaries globally so Render's native Linux engine can bypass its missing system fonts
const fontPath = path.join(process.cwd(), "src", "assets", "NotoNaskhArabic-Regular.ttf");
try {
  GlobalFonts.registerFromPath(fontPath, "Noto Naskh Arabic");
} catch (e) {
  console.warn("Font registration warning:", e);
}

export async function generateFrame(
  arabicText: string,
  englishText: string | null,
  outPath: string
): Promise<void> {
  let canvas = createCanvas(1280, 720);
  const ctx = canvas.getContext("2d");

  // Dynamically inject the user's high-definition background image design
  const bgPath = path.join(process.cwd(), "src", "assets", "background.png");
  try {
    const bgImage = await loadImage(bgPath);
    ctx.drawImage(bgImage, 0, 0, 1280, 720);
  } catch(e) {
    // Graceful fallback if background is mysteriously missing
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
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.font = '72px "Noto Naskh Arabic"';
    ctx.fillText(arabicText, 640, 360);
  }

  const buffer = canvas.encodeSync("png");
  await fs.writeFile(outPath, buffer);

  // Free the native Node.js C++ canvas buffer explicitly
  (canvas as any) = null;
}
