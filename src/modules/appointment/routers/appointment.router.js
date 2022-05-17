import { BaseRouter } from "../../../common/base-router.js";
import { makeAppointmentValidations } from "../validations/appointment.validations.js";

export class AppointmentRouter extends BaseRouter {
  constructor(appointmentController) {
    super();

    this.appointmentController = appointmentController;

    this.#init();
  }

  #init() {
    this.post(
      "/create",
      makeAppointmentValidations,
      this.appointmentController.makeAppointment
    );
  }
}
