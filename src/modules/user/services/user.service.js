import { AbstractService } from "../../../common/abstract-service.js";
import { ApiException } from "../../../errors/api.exception.js";
import { HttpCode } from "../../../misc/http-codes.js";
import { USER } from "../../../misc/schema.keys.js";

export class UserService extends AbstractService {
  constructor() {
    super({ repositoryKey: USER });
  }

  async createUser(name, email) {
    const candidate = await this.findOneWhere({ email: email }, false);

    if (candidate) {
      throw new ApiException(
        `Пользователь с email ${email} уже существует`,
        HttpCode.BAD_REQUEST
      );
    }

    return await this.create({ name, email });
  }
}
