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
}

export default ApplicationLogger.getInstance();
