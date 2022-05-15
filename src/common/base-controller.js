import chalk from "chalk";
import { ErrorHandler } from "./error-handler.js";

export class BaseController {
  #errorHandler;

  constructor() {
    this.#errorHandler = new ErrorHandler();
  }

  sendResponse(req, res, status, response) {
    res.status(status);
    res.json({
      status,
      ...response,
    });
    this.#log(req, status, response);
  }

  handleError = (err, req, res) => {
    this.#errorHandler.handle(err, req, res);
  };

  #log(req, status, response) {
    console.log(
      chalk.green(`[Request "${req.url}" completed] response: ${JSON.stringify(
        response
      )}
    `)
    );
  }
}
