import { Router } from "express";
import { RouterError } from "../errors/Router.error.js";

export class BaseRouter {
  #router = Router();
  #deleteRoutes = [];
  #postRoutes = [];
  #putRoutes = [];
  #getRoutes = [];

  get router() {
    return this.#router;
  }

  get(key, handler) {
    this.#registerRoute(key, "get", this.#getRoutes);
    this.router.get(key, handler);
  }

  post(key, handler) {
    this.#registerRoute(key, "post", this.#postRoutes);
    this.router.post(key, handler);
  }

  put(key, handler) {
    this.#registerRoute(key, "put", this.#putRoutes);
    this.router.put(key, handler);
  }

  delete(key, handler) {
    this.#registerRoute(key, "delete", this.#deleteRoutes);
    this.router.delete(key, handler);
  }

  #checkIfRouteExists(key, type) {
    switch (type) {
      case "get":
        return this.#findRoute(key, type, this.#getRoutes);
      case "post":
        return this.#findRoute(key, type, this.#postRoutes);
      case "put":
        return this.#findRoute(key, type, this.#putRoutes);
      case "delete":
        return this.#findRoute(key, type, this.#deleteRoutes);
    }
  }

  #findRoute(key, type, arr) {
    const candidateRoute = arr.find((i) => i === key);
    if (candidateRoute) {
      throw new RouterError(key, type);
    }
    return true;
  }

  #registerRoute(key, type, arr) {
    const isNotExists = this.#checkIfRouteExists(key, type);

    if (isNotExists) {
      arr.push(key);
    }
  }
}
