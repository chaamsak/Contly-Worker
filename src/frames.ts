import { createCanvas } from "@napi-rs/canvas";
import fs from "fs/promises";

export async function generateFrame(
  arabicText: string,
  englishText: string | null,
  outPath: string
): Promise<void> {
  const canvas = createCanvas(1280, 720);
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
  } else {
    ctx.fillStyle = "#111827";
    ctx.font = '72px "Noto Naskh Arabic", "Arial", sans-serif';
    ctx.fillText(arabicText, 640, 360);
  }

  const buffer = canvas.encodeSync("png");
  await fs.writeFile(outPath, buffer);

  // Free the native canvas buffer explicitly
  (canvas as any) = null;
}
