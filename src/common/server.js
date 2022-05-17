import express from "express";
import { InnerError } from "../errors/Inner.error.js";
import middlewares from "../middlewares/index.js";
import { bree } from "./cron.js";
import injectionManager from "./injection.manager.js";

class Server {
  #app = express();
  #server = null;
  #mainModule;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Server();
    }

    return this.instance;
  }

  up(port) {
    return new Promise((res, rej) => {
      try {
        this.#init();
        this.#initRouters();

        this.#server = this.#app.listen(port, () => {
          console.log(`Server is running on ${port}`);
          res();
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  down() {
    return new Promise((res, rej) => {
      try {
        this.#server.close(() => {
          console.log(`App is closed`);
          res();
        });
      } catch (err) {
        rej(err);
      }
    });
  }

  registerMainModule(module) {
    this.#mainModule = module;
  }

  #initRouters() {
    if (!this.#mainModule) {
      throw new InnerError();
    }

    for (const item of this.#mainModule.imports) {
      if (item.imports.length) {
        throw new InnerError();
      }

      for (const routerItem of item.routers) {
        this.#app.use(
          routerItem.key,
          injectionManager.inject(routerItem.name).router
        );
      }
    }
  }

  #init() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(...middlewares);

    bree.start();
  }
}

export default Server.getInstance();
