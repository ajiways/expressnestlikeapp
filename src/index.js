import Server from "./common/server.js";
import { ConfigService } from "./config/config.service.js";
import { APP_PORT } from "./misc/config.keys.js";

async function bootstrap() {
  try {
    await Server.up(ConfigService.getFromEnv(APP_PORT));
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

bootstrap();
