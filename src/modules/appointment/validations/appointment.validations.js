import { check } from "express-validator";

export const makeAppointmentValidations = [
  check("userId").isUUID("4").withMessage("Должно быть корректным uuid v4"),
  check("doctorId").isUUID("4").withMessage("Должно быть корректным uuid v4"),
  check("datetime")
    .matches(/^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d/)
    .withMessage("Должно быть датой в формате 'yyyy-mm-dd hh:mm'"),
];
