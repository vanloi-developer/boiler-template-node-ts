import express from "express";

import morgan from "morgan";

import cors from "cors";

import { PORT } from "./configs";
import { ApiRouter } from "./routes/ApiRouter";
import { HttpException } from "./app/core";

class Application {
  private _server = express();

  constructor() {
    this.initializeMiddleware();
    this.start();

    this.initializeHttpException();
  }

  public initializeMiddleware() {
    this._server.use(morgan("tiny"));

    this._server.use(cors());

    this._server.use(express.json());

    this._server.use(express.urlencoded({ extended: false }));
  }

  public async initializeHttpException() {
    await HttpException.catch;
    await HttpException.catch404;
  }

  public start() {
    this._server.listen(PORT, () => {
      console.log(`PORT: ${PORT}`);
    });

    this._server.use("/api", new ApiRouter()._router);
  }
}

Object.seal(Application);
export { Application };
