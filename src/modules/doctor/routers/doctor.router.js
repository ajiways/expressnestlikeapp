import { BaseRouter } from "../../../common/base-router.js";

export class DoctorRouter extends BaseRouter {
  constructor(doctorController) {
    super();
    this.doctorController = doctorController;

    this.#init();
  }

  #init() {}
}
