import type { Request, Response, NextFunction } from "express";
import type { ZodObject } from "zod";
import ApiResponse from "../util/apiResponse.js";

export const validateRequest =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      console.log(result.error.message);

      const errors = result.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return new ApiResponse(400, "Validation failed",errors).send(res);
    }
    next();
  };
