import { BaseController } from "../../../common/base-controller.js";

export class DoctorController extends BaseController {
  constructor(doctorService) {
    super();
    this.doctorService = doctorService;
  }
}
