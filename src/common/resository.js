import pkg from "@prisma/client";
import { RepositoryError } from "../errors/Repository.error.js";
import { APPOINTMENT, DOCTOR, SCHEDULE, USER } from "../misc/schema.keys.js";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export class Repository {
  static get(key) {
    switch (key) {
      case USER:
        return prisma.user;
      case SCHEDULE:
        return prisma.schedule;
      case APPOINTMENT:
        return prisma.appointment;
      case DOCTOR:
        return prisma.doctor;
      default:
        throw new RepositoryError(key);
    }
  }
}
