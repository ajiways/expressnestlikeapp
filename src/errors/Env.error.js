import { ApplicationError } from "./Application.error.js";

export class EnvError extends ApplicationError {
  constructor(key) {
    super({
      message: `Env param with key: ${key} was not found. Unable to start server while all important params is not defined.`,
    });
  }
}
