import { AbstractService } from "../../../common/abstract-service.js";
import { SLOT } from "../../../misc/schema.keys.js";

export class SlotService extends AbstractService {
  constructor() {
    super({ repositoryKey: SLOT });
  }
}
