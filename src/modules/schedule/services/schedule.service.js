import { AbstractService } from "../../../common/abstract-service.js";
import { SCHEDULE } from "../../../misc/schema.keys.js";

export class ScheduleService extends AbstractService {
  constructor() {
    super({ repositoryKey: SCHEDULE });
  }

  async scheduleList(dateTime) {
    return await this.findWhereWithRelations(
      { date: new Date(dateTime) },
      { slots: { include: { appointment: true } } }
    );
  }
}
