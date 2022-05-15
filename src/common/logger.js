import chalk from "chalk";

class ApplicationLogger {
  static getInstance() {
    if (!this.instance) {
      this.instance = new ApplicationLogger();
    }

    return this.instance;
  }

  log(req) {
    console.log(
      chalk.green(`[Request "${req.url}"]: args: ${JSON.stringify(req.body)}`)
    );
  }

  logError(req, status, details) {
    if (details) {
      console.log(
        chalk.red(
          `[Request "${
            req.url
          }" failed with status ${status}]: details: ${JSON.stringify(details)}`
        )
      );
      return;
    }

    console.log(
      chalk.red(`[Request "${req.url}" failed with status ${status}]`)
    );
  }

  logResponse(req, status, response) {
    console.log(
      chalk.green(
        `[Request "${
          req.url
        }" was completed with status ${status}]: response: ${JSON.stringify(
          response
        )}`
      )
    );
  }
}

export default ApplicationLogger.getInstance();
