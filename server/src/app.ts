import express from "express";
import type { Application, Request, Response } from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.ts";
import chatRoutes from "./routes/chat.routes.ts";
import vapiRoutes from "./routes/vapi.routes.ts";
import leadRoutes from "./routes/lead.routes.ts";

import errorHandler from "./middleware/error-handler.middleware.ts";

const app: Application = express();

/* =========================
   Middlewares
========================= */

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

/* =========================
   Routes
========================= */

app.get("/", (req: Request, res: Response) => {
  res.send("EduReach API is running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/vapi", vapiRoutes);
app.use("/api/leads", leadRoutes);

/* =========================
   Error Handler
========================= */

app.use(errorHandler);

export default app;