import { BaseRouter } from "../../../common/base-router.js";
import { scheduleListValidations } from "../validations/schedule-list.validations.js";

export class ScheduleRouter extends BaseRouter {
  constructor(scheduleController) {
    super();

    this.scheduleController = scheduleController;

    this.#init();
  }

  #init() {
    this.get(
      "/list",
      scheduleListValidations,
      this.scheduleController.scheduleList
    );
  }
}
