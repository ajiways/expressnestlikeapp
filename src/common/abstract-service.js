import { ApiException } from "../errors/api.exception.js";
import { HttpCode } from "../misc/http-codes.js";
import { Repository } from "./resository.js";

export class AbstractService {
  #repository;

  constructor({ repositoryKey }) {
    this.#repository = Repository.get(repositoryKey);
  }

  create = async (input) => {
    return await this.#repository.create({ data: input });
  };

  findOne = async (conditions) => {
    const candidate = await this.#repository.findFirst({ where: conditions });

    if (!candidate) {
      throw new ApiException(`Сущность не найдена`, HttpCode.NOT_FOUND);
    }

    return candidate;
  };
}
