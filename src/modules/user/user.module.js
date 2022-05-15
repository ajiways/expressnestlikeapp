import { Module } from "../../common/module.js";
import {
  USER_CONTROLLER,
  USER_ROUTER,
  USER_SERVICE,
} from "../../misc/injection.keys.js";
import { UserController } from "./controllers/user.controller.js";
import { UserRouter } from "./routers/user.router.js";
import { UserService } from "./services/user.service.js";

const userModule = new Module({
  providers: [{ name: USER_SERVICE, class: UserService }],
  controllers: [{ name: USER_CONTROLLER, class: UserController }],
  routers: [{ name: USER_ROUTER, key: "/user", class: UserRouter }],
});

export default userModule;
