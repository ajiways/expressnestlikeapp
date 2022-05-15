import ApplicationLogger from "../common/logger.js";

const logger = ApplicationLogger;

export const logMiddleware = (req, res, next) => {
  logger.log(req);
  next();
};
