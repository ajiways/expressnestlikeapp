import pkg from "@prisma/client";
import { RepositoryError } from "../errors/Repository.error.js";
import {
  APPOINTMENT,
  DOCTOR,
  SCHEDULE,
  SLOT,
  USER,
} from "../misc/schema.keys.js";
const { PrismaClient } = pkg;

class Repository {
  #prisma = new PrismaClient();

  static getInstance() {
    if (!this.instance) {
      this.instance = new Repository();
    }

    return this.instance;
  }

  get(key) {
    switch (key) {
      case USER:
        return this.#prisma.user;
      case SCHEDULE:
        return this.#prisma.schedule;
      case APPOINTMENT:
        return this.#prisma.appointment;
      case DOCTOR:
        return this.#prisma.doctor;
      case SLOT:
        return this.#prisma.slot;
      default:
        throw new RepositoryError(key);
    }
  }

  get client() {
    return this.#prisma;
  }
}

export default Repository.getInstance();
