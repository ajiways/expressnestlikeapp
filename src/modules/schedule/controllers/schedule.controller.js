import { BaseController } from "../../../common/base-controller.js";

export class ScheduleController extends BaseController {
  constructor(scheduleService) {
    super();

    this.scheduleService = scheduleService;
  }
}
