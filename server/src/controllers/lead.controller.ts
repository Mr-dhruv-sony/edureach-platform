import type { Request, Response, NextFunction } from "express";
import Lead from "../models/lead.model.ts";

// GET all leads
export const getLeads = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {

    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: leads
    });

  } catch (error) {

    next(error);

  }

};