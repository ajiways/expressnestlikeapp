import { BaseRouter } from "../../../common/base-router.js";
import { createUserValidations } from "../validations/user.validations.js";

export class UserRouter extends BaseRouter {
  constructor(userController) {
    super();
    this.userController = userController;
    this.#init();
  }

  #init() {
    this.post("/create", createUserValidations, this.userController.createUser);
  }
}
