import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "src/app/enums/HttpStatusCode";
import { DataResponse } from "../responses";
import { ApiError } from "./ApiError";

class HttpException {
  public static catch = async (
    error: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const code: HttpStatusCode = error._code;

    const response = new DataResponse(false, null, error);

    return await res.status(code).json(response);
  };

  public static catch404 = async (req: Request, res: Response) => {
    const message = `${req.method} ${req.url} is not found!`;

    const code = HttpStatusCode.NOT_FOUND;

    const error = new ApiError(code, message);

    const response = new DataResponse(false, null, error);

    return await res.status(code).json(response);
  };
}

export { HttpException };
