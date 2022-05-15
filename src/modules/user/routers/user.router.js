import { BaseRouter } from "../../../common/base-router.js";

export class UserRouter extends BaseRouter {
  constructor(userController) {
    super();
    this.userController = userController;
    this.#init();
  }

  #init() {
    this.post("/create", this.userController.createUser);
  }
}
