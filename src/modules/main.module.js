import { Module } from "../common/module.js";
import UserModule from "./user/user.module.js";
import DoctorModule from "./doctor/doctor.module.js";
import AppointmentModule from "./appointment/appointment.module.js";

const MainModule = new Module({
  imports: [UserModule, DoctorModule, AppointmentModule],
});

export default MainModule;
