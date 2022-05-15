import { ApplicationError } from "./Application.error.js";

export class RouterError extends ApplicationError {
  constructor(url, type) {
    super({
      message: `Route with url ${url} and type ${type} already exists.`,
    });
  }
}
