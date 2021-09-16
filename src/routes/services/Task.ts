import { TaskController } from "src/app/controllers";
import { BaseRouter } from "../base";

class TaskRouter extends BaseRouter {
  public _controller: TaskController = new TaskController();

  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.post("/save", this._controller.save);
    this._router.delete("/delete/:id");
    this._router.post("/getAllPagging");
    this._router.get("/getAll", this._controller.getAll);
  }
}

Object.seal(TaskRouter);

export const handlingTask = new TaskRouter()._router;
