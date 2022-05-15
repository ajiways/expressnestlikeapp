import { Module } from "../common/module.js";
import UserModule from "./user/user.module.js";
import DoctorModule from "./doctor/doctor.module.js";
import AppointmentModule from "./appointment/appointment.module.js";
import ScheduleModule from "./schedule/schedule.module.js";

const mainModule = new Module({
  imports: [UserModule, DoctorModule, AppointmentModule, ScheduleModule],
});

export default mainModule;
