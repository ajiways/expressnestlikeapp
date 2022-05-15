import { BaseController } from "../../../common/base-controller.js";
import { HttpCode } from "../../../misc/http-codes.js";

export class DoctorController extends BaseController {
  constructor(doctorService) {
    super();
    this.doctorService = doctorService;
  }

  appointment = async (req, res) => {
    try {
      const response = await this.doctorService.makeAppointment();

      this.sendResponse(req, res, HttpCode.OK, { data: response });
    } catch (error) {
      this.handleError(error, req, res);
    }
  };
}
