import { AbstractService } from "../../../common/abstract-service.js";
import { USER } from "../../../misc/schema.keys.js";

export class UserService extends AbstractService {
  constructor() {
    super({ repositoryKey: USER });
  }

  async createUser(name, email) {
    return await this.create({ name, email });
  }
}
