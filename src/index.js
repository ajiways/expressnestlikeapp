import Server from "./common/server.js";
import ConfigService from "./config/config.service.js";
import { APP_PORT } from "./misc/config.keys.js";
import MainModule from "./modules/main.module.js";

async function bootstrap() {
  try {
    Server.registerMainModule(MainModule);
    await Server.up(ConfigService.getFromEnv(APP_PORT));
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

bootstrap();
