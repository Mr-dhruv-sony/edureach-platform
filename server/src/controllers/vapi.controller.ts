import type { Request, Response, NextFunction } from "express";
import { initiateOutboundCall } from "../services/vapi.service.ts";
import Lead from "../models/lead.model.ts";

export const startCall = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {

    const { phoneNumber, preferredCourse } = req.body;

    // Save lead in CRM
    const lead = await Lead.create({
      name: "Website Student",
      phone: phoneNumber,
      interest: preferredCourse,
      source: "AI Call",
      status: "new"
    });

    // Start AI phone call
    const call = await initiateOutboundCall({
      phoneNumber,
      userName: "Student",
      preferredCourse
    });

    res.json({
      success: true,
      data: {
        call,
        lead
      }
    });

  } catch (error) {

    next(error);

  }

};