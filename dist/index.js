"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const crypto_1 = __importDefault(require("crypto"));
const generate_1 = require("./generate");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const workerSecret = process.env.WORKER_SECRET || "bonjour";
function authMiddleware(req, res, next) {
    const header = req.headers["authorization"];
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Missing authorization header" });
    }
    const token = header.split(" ")[1];
    if (token.length !== workerSecret.length) {
        return res.status(401).json({ error: "Invalid secret length" });
    }
    const match = crypto_1.default.timingSafeEqual(Buffer.from(token), Buffer.from(workerSecret));
    if (!match) {
        return res.status(403).json({ error: "Forbidden access" });
    }
    next();
}
app.get("/health", (req, res) => {
    res.json({ ok: true, timestamp: Date.now() });
});
app.post("/generate", authMiddleware, (req, res) => {
    const body = req.body;
    if (!body.jobId || !body.items || !Array.isArray(body.items)) {
        return res.status(400).json({ error: "Invalid payload formatting" });
    }
    // Acknowledge immediately to prevent cloud router timeouts!
    res.status(202).json({ message: "Video job accepted and processing" });
    // Disconnect the promise from the event loop handler immediately
    (0, generate_1.processVideoJob)(body).catch((err) => {
        console.error("Fatal background processing exception:", err);
    });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Contly Worker microservice dynamically initialized on port ${PORT}`);
});
