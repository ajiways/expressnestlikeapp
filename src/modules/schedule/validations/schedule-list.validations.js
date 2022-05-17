import { check } from "express-validator";

export const scheduleListValidations = [
  check("date_time")
    .matches(/\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01])/)
    .withMessage("Должно быть датой в формате 'yyyy-mm-dd'"),
];
