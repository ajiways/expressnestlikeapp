import { ApiException } from "../errors/api.exception.js";
import { HttpCode } from "../misc/http-codes.js";
import Repository from "./resository.js";

export class AbstractService {
  #repository;

  constructor({ repositoryKey }) {
    this.#repository = Repository.get(repositoryKey);
  }

  async create(input) {
    return await this.#repository.create({ data: input });
  }

  async findOneWhere(conditions) {
    const candidate = await this.#repository.findFirst({
      where: conditions,
    });

    if (!candidate) {
      throw new ApiException(
        `Сущность с параметрами ${JSON.stringify(conditions)} не найдена`,
        HttpCode.NOT_FOUND
      );
    }

    return candidate;
  }

  async findOneNullableWhere(conditions) {
    const candidate = await this.#repository.findFirst({
      where: conditions,
    });

    return candidate;
  }

  async findOneById(id, checkIfExists) {
    const candidate = await this.#repository.findUnique({ where: { id } });

    if (checkIfExists) {
      if (!candidate) {
        throw new ApiException(
          `Сущность c id ${id} не найдена`,
          HttpCode.NOT_FOUND
        );
      }
    }

    return candidate;
  }

  async findWhereWithRelations(conditions, relations) {
    return await this.#repository.findMany({
      where: conditions,
      include: relations,
    });
  }

  async findWhere(conditions) {
    return await this.#repository.findMany({ where: conditions });
  }

  async findAll() {
    return await this.#repository.findMany();
  }
}
