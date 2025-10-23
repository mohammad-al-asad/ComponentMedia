import type { Response } from "express";

class ApiResponse {
  constructor(
    public statusCode: number,
    public message: string,
    public data: any = null,
    public success: boolean = statusCode < 400
  ) {}

  send(res: Response): Response {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data
    });
  }
}

export default ApiResponse;