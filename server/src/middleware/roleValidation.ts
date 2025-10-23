import type { Request, Response, NextFunction } from "express";
import ApiResponse from "../util/apiResponse.js";

export function roleValidation(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role !== role) {
      return new ApiResponse(
        403,
        "You do not have access for this resource"
      ).send(res);
    }
    next();
  };
}
