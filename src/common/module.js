import injectionManager from "./injection.manager.js";

export class Module {
  #controllers;
  #providers;
  #imports;
  #routers;

  constructor({ controllers, providers, imports, routers }) {
    this.#controllers = controllers || [];
    this.#providers = providers || [];
    this.#imports = imports || [];
    this.#routers = routers || [];

    this.#init();
  }

  #init() {
    for (const item of this.#providers) {
      injectionManager.makeInjectable(item.name, item.class);
    }
    for (const item of this.#controllers) {
      injectionManager.makeInjectable(item.name, item.class);
    }
    for (const item of this.#routers) {
      injectionManager.makeInjectable(item.name, item.class);
    }
  }

  get imports() {
    return this.#imports;
  }

  get routers() {
    return this.#routers;
  }

  get controllers() {
    return this.#controllers;
  }

  get providers() {
    return this.#providers;
  }
}
