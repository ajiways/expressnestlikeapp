import { Lifetime } from "awilix";
import { Module } from "../../common/module.js";
import {
  SCHEDULE_CONTROLLER,
  SCHEDULE_ROUTER,
  SCHEDULE_SERVICE,
  SLOT_SERVICE,
} from "../../misc/injection.keys.js";
import { ScheduleController } from "./controllers/schedule.controller.js";
import { ScheduleRouter } from "./routers/schedule.router.js";
import { ScheduleService } from "./services/schedule.service.js";
import { SlotService } from "./services/slot.service.js";

const scheduleModule = new Module({
  controllers: [{ name: SCHEDULE_CONTROLLER, class: ScheduleController }],
  providers: [
    {
      name: SCHEDULE_SERVICE,
      class: ScheduleService,
      lifetime: Lifetime.SINGLETON,
    },
    { name: SLOT_SERVICE, class: SlotService },
  ],
  routers: [{ name: SCHEDULE_ROUTER, key: "/schedule", class: ScheduleRouter }],
});

export default scheduleModule;
