import { Router } from "express";
import { getLeads } from "../controllers/lead.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";

const router = Router();

router.get("/", authMiddleware, getLeads);

export default router;