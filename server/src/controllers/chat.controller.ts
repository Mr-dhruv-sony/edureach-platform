import type { Request, Response, NextFunction } from "express";
import { getRAGResponse } from "../services/rag.service.ts";
import Lead from "../models/lead.model.ts";

export const sendMessage = async (
req: Request,
res: Response,
next: NextFunction
): Promise<void> => {

try {

```
const { message, history } = req.body;

if (!message || typeof message !== "string") {
  res.status(400).json({
    success: false,
    message: "Message is required."
  });
  return;
}

// -----------------------------
// Detect admission interest
// -----------------------------

const lower = message.toLowerCase();

const admissionKeywords = [
  "admission",
  "apply",
  "join",
  "enroll",
  "i want admission",
  "how to apply",
  "application process"
];

const isLead = admissionKeywords.some(keyword =>
  lower.includes(keyword)
);

if (isLead) {

  await Lead.create({
    name: "Website Visitor",
    interest: message,
    source: "chatbot"
  });

  console.log("Lead captured from chatbot");

}

// -----------------------------
// Generate AI response
// -----------------------------

const response = await getRAGResponse(message, history || []);

res.status(200).json({
  success: true,
  data: {
    response
  }
});
```

} catch (error) {

```
next(error);
```

}

};
