import { AbstractService } from "../../../common/abstract-service.js";
import { DOCTOR } from "../../../misc/schema.keys.js";

export class DoctorService extends AbstractService {
  constructor() {
    super({ repositoryKey: DOCTOR });
  }
}
