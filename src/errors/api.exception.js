import { ApplicationError } from "./Application.error.js";

export class ApiException extends ApplicationError {
  constructor(message, status) {
    super({ message });
    this.status = status;
  }
}
