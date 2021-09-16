import { BaseRouter } from "./base";
import { ServiceRouter } from "./services";

class ApiRouter extends BaseRouter {
  constructor() {
    super();
    this.init();
  }

  public init() {
    this._router.use("/services/app", new ServiceRouter()._router);
  }
}

export { ApiRouter };
