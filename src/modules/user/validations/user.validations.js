import { check } from "express-validator";

export const createUserValidations = [
  check("name", "Имя пользователя должно быть строкой").isString().trim(),
  check("email", "Почтовый адрес пользователя должен быть корректным")
    .isEmail()
    .trim(),
];
