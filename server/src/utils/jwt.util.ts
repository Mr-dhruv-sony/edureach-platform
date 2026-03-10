import jwt from "jsonwebtoken";

export interface JWTPayload {
  userId: string;
  email: string;
  role: "student" | "admin";
}

export const generateToken = (payload: JWTPayload): string => {
  const secret = process.env.JWT_SECRET as string;

  return jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });
};

export const verifyToken = (token: string): JWTPayload => {
  const secret = process.env.JWT_SECRET as string;

  return jwt.verify(token, secret) as JWTPayload;
};
