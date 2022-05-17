import { BaseController } from "../../../common/base-controller.js";
import { HttpCode } from "../../../misc/http-codes.js";

export class ScheduleController extends BaseController {
  constructor(scheduleService) {
    super();

    this.scheduleService = scheduleService;
  }

  scheduleList = async (req, res) => {
    if (this.checkValidation(req, res)) return;

    const dateTime = req.body.date_time;

    try {
      const schedules = await this.scheduleService.scheduleList(dateTime);

      this.sendResponse(req, res, HttpCode.OK, schedules);
    } catch (e) {
      this.handleError(e, req, res);
    }
  };
}
