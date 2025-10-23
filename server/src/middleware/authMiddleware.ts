import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiResponse from "../util/apiResponse.js";

declare global {
  namespace Express {
    interface Request {
      user?: any;
      query?:any;
    }
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;

  if (authorization && authorization.startsWith("Bearer ")) {
    const authToken = authorization.split(" ")[1];

    try {
      const user = jwt.verify(authToken!, process.env.JWT_SECRET || "");
      req.user = user;
      next();
    } catch (err) {
      return new ApiResponse(403, "Invalid or expired token").send(res);
    }
  } else {
    return new ApiResponse(
      403,
      "Unauthorized access - token missing or malformed"
    ).send(res);
  }
}
