import { HttpCode } from "../misc/http-codes.js";
import { ErrorHandler } from "./error-handler.js";
import { validationResult } from "express-validator";
import ApplicationLogger from "./logger.js";

export class BaseController {
  #errorHandler;
  #logger;

  constructor() {
    this.#errorHandler = new ErrorHandler();
    this.#logger = ApplicationLogger;
  }

  sendResponse(req, res, status, response) {
    res.status(status);
    res.json({
      status,
      ...response,
    });
    this.#logger.logResponse(req, status, response);
  }

  handleError = (err, req, res) => {
    this.#errorHandler.handle(err, req, res);
  };

  checkValidation(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(HttpCode.BAD_REQUEST);
      res.json({
        status: HttpCode.BAD_REQUEST,
        message: "Ошибка валидации",
        errors: errors.errors,
      });
      this.#logger.logError(req, HttpCode.BAD_REQUEST, "Ошибка валидации");
      return true;
    }
    return false;
  }
}
