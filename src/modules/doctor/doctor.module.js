import { Module } from "../../common/module.js";
import {
  DOCTOR_CONTROLLER,
  DOCTOR_ROUTER,
  DOCTOR_SERVICE,
} from "../../misc/injection.keys.js";
import { DoctorController } from "./controllers/doctor.controller.js";
import { DoctorRouter } from "./routers/doctor.router.js";
import { DoctorService } from "./services/doctor.service.js";

const doctorModule = new Module({
  controllers: [{ name: DOCTOR_CONTROLLER, class: DoctorController }],
  providers: [{ name: DOCTOR_SERVICE, class: DoctorService }],
  routers: [{ name: DOCTOR_ROUTER, key: "/doctor", class: DoctorRouter }],
});

export default doctorModule;
