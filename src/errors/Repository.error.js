import { ApplicationError } from "./Application.error.js";

export class RepositoryError extends ApplicationError {
  constructor(key) {
    super({
      message: `Cannot get repository for non-existing entity ${key}.`,
    });
  }
}
