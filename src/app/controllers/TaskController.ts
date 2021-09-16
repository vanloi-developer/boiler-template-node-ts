import { NextFunction, Request, Response } from "express";
import { DataResponse } from "../core";
import { TaskService } from "../services";
import { BaseController } from "./base";

class TaskController extends BaseController {
  public _business: TaskService;
  constructor() {
    super();
    this._business = new TaskService();
  }

  public save = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this._business.save(req.body);

      const successData = new DataResponse(true, result, null);

      return res.status(200).json(successData);
    } catch (error) {
      next(error);
    }
  };

  public delete = async () => {
    throw new Error(`This is not implement`);
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this._business.getAll();

      const successData = new DataResponse(true, result, null);

      return res.status(200).json(successData);
    } catch (error) {
      next(error);
    }
  };


}

Object.seal(TaskController);
export { TaskController };
