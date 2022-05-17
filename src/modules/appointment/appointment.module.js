import { Lifetime } from "awilix";
import { Module } from "../../common/module.js";
import {
  APPOINTMENT_CONTROLLER,
  APPOINTMENT_ROUTER,
  APPOINTMENT_SERVICE,
} from "../../misc/injection.keys.js";
import { AppointmentController } from "./controllers/appointment.controller.js";
import { AppointmentRouter } from "./routers/appointment.router.js";
import { AppointmentService } from "./services/appointment.service.js";

const appointmentModule = new Module({
  controllers: [{ name: APPOINTMENT_CONTROLLER, class: AppointmentController }],
  providers: [
    {
      name: APPOINTMENT_SERVICE,
      class: AppointmentService,
      lifetime: Lifetime.SINGLETON,
    },
  ],
  routers: [
    { name: APPOINTMENT_ROUTER, key: "/appointment", class: AppointmentRouter },
  ],
});

export default appointmentModule;
