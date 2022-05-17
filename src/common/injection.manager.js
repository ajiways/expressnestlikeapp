import awilix, { Lifetime } from "awilix";

class InjectionManager {
  #container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
  });

  static getInstance() {
    if (!this.instance) {
      this.instance = new InjectionManager();
    }
    return this.instance;
  }

  inject(key) {
    return this.#container.resolve(key);
  }

  makeInjectable(name, value) {
    this.#container.register({
      [name]: awilix.asClass(value).classic(),
    });
  }

  makeInjectableAsSingleton(name, value) {
    this.#container.register({
      [name]: awilix.asClass(value).setLifetime(Lifetime.SINGLETON).classic(),
    });
  }
}

export default InjectionManager.getInstance();
