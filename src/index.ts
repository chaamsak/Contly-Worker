import express from "express";
import "dotenv/config";
import crypto from "crypto";
import { processVideoJob } from "./generate";
import { GenerateRequest } from "./types";

const app = express();
app.use(express.json());

const workerSecret = process.env.WORKER_SECRET || "bonjour";

function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const header = req.headers["authorization"];
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing authorization header" });
  }

  const token = header.split(" ")[1];

  if (token.length !== workerSecret.length) {
    return res.status(401).json({ error: "Invalid secret length" });
  }

  const match = crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(workerSecret)
  );

  if (!match) {
    return res.status(403).json({ error: "Forbidden access" });
  }
  next();
}

app.get("/health", (req, res) => {
  res.json({ ok: true, timestamp: Date.now() });
});

app.post("/generate", authMiddleware, (req, res) => {
  const body = req.body as GenerateRequest;

  if (!body.jobId || !body.items || !Array.isArray(body.items)) {
    return res.status(400).json({ error: "Invalid payload formatting" });
  }

  // Acknowledge immediately to prevent cloud router timeouts!
  res.status(202).json({ message: "Video job accepted and processing" });

  // Disconnect the promise from the event loop handler immediately
  processVideoJob(body).catch((err) => {
    console.error("Fatal background processing exception:", err);
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contly Worker microservice dynamically initialized on port ${PORT}`);
});
