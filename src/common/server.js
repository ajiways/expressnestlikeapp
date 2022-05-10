import express from "express";
import routers from "../routers/index.js";

class Server {
  #app = express();
  #server = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Server();
    }

    return this.instance;
  }

  up(port) {
    return new Promise((res, rej) => {
      try {
        for (const item of routers) {
          this.#addRouter(item.router, item.path);
        }

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

  #addRouter(router, path) {
    this.#app.use(path, router);
  }
}

export default Server.getInstance();
