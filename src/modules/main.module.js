import { Module } from "../common/module.js";
import UserModule from "./user/user.module.js";
import DoctorModule from "./doctor/doctor.module.js";

const MainModule = new Module({
  imports: [UserModule, DoctorModule],
});

export default MainModule;
