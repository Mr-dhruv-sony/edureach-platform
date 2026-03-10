import { Router } from "express";
import { getLeads } from "../controllers/lead.controller.ts";
import authMiddleware from "../middleware/auth.middleware.ts";
import adminMiddleware from "../middleware/admin.middleware.ts";

const router = Router();

router.get("/", authMiddleware, adminMiddleware, getLeads);

export default router;
