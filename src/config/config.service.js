import { config } from "dotenv";
import { EnvError } from "../errors/Env.error.js";
config();

export default class ConfigService {
  static getFromEnv(key) {
    const value = process.env[key];

    if (!value) {
      throw new EnvError(key);
    }

    return value;
  }
}
