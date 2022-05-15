import { ApplicationError } from "./Application.error.js";

export class InnerError extends ApplicationError {
  constructor() {
    super({
      message: "Some error occured somewhere, just check stack trace :/",
    });
  }
}
