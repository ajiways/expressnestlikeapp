import { AbstractService } from "../../../common/abstract-service.js";
import { APPOINTMENT } from "../../../misc/schema.keys.js";

export class AppointmentService extends AbstractService {
  constructor() {
    super({ repositoryKey: APPOINTMENT });
  }
}
