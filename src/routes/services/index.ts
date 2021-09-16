import { BaseRouter } from "../base";
import { handlingTask } from "./Task";

class ServiceRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.use("/task", handlingTask);
  }
}

export { ServiceRouter };
