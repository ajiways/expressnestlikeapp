import { BaseRouter } from "../../../common/base-router.js";

export class ScheduleRouter extends BaseRouter {
  constructor(scheduleController) {
    super();

    this.scheduleController = scheduleController;
  }
}
