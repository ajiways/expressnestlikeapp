import chalk from "chalk";
import { ApiException } from "../errors/api.exception.js";
import { InnerError } from "../errors/Inner.error.js";
import { HttpCode } from "../misc/http-codes.js";

export class ErrorHandler {
  handle = (err, req, res) => {
    if (err instanceof InnerError) {
      this.#logError(req, err);
      res.status(HttpCode.INTERNAL_ERROR);
      res.json({
        status: HttpCode.INTERNAL_ERROR,
        message: "Some serious error occured, let me know about it :)",
      });
    } else if (err instanceof ApiException) {
      this.#logError(req, err);
      res.status(err.status);
      res.json({
        status: err.status,
        message: err.message,
      });
    }
  };

  #logError(req, err) {
    console.log(
      chalk.red(
        `[Request "${req.url}" Failed with error ${JSON.stringify(err)}]`
      )
    );
  }
}
