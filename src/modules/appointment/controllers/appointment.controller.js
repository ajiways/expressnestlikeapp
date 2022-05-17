import { BaseController } from "../../../common/base-controller.js";
import { HttpCode } from "../../../misc/http-codes.js";

export class AppointmentController extends BaseController {
  constructor(appointmentService) {
    super();

    this.appointmentService = appointmentService;
  }

  makeAppointment = async (req, res) => {
    if (this.checkValidation(req, res)) return;

    const { doctorId, userId, datetime } = req.body;

    try {
      const response = await this.appointmentService.makeAppointment(
        userId,
        doctorId,
        datetime
      );

      this.sendResponse(req, res, HttpCode.CREATED, { appointment: response });
    } catch (error) {
      this.handleError(error, req, res);
    }
  };
}
