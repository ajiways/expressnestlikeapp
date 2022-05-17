import nodemailer from "nodemailer";
import { workerData } from "worker_threads";
import ConfigService from "../src/config/config.service.js";
import pkg from "@prisma/client";
import {
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
} from "../src/misc/config.keys.js";
const { PrismaClient } = pkg;

console.log(
  "================================SEND MAIL==================================="
);
console.log(workerData.description);

const client = new PrismaClient();

Number.prototype.padLeft = function (base, chr) {
  const len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};

const date = new Date(
  Date.now() - new Date(Date.now()).getTimezoneOffset() * 60000
);

const dFormat =
  [
    date.getFullYear(),
    (date.getMonth() + 1).padLeft(),
    date.getDate().padLeft(),
  ].join("-") +
  " " +
  [date.getHours().padLeft(), date.getMinutes().padLeft()].join(":");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: ConfigService.getFromEnv(NODEMAILER_EMAIL),
    pass: ConfigService.getFromEnv(NODEMAILER_PASSWORD),
  },
});

const slotsOneDayRemaining = await client.slot.findMany({
  where: { time: new Date(new Date(dFormat).getTime() + 3600 * 1000 * 24) },
  include: {
    appointment: {
      select: {
        user: true,
      },
    },
  },
});

const slotsOneHourRemaining = await client.slot.findMany({
  where: { time: new Date(new Date(dFormat).getTime() + 3600 * 1000) },
  include: {
    appointment: {
      select: {
        user: true,
      },
    },
  },
});

console.log(slotsOneDayRemaining);
console.log(slotsOneHourRemaining);

for (const slot of slotsOneHourRemaining) {
  transporter.sendMail({
    from: "mis-app@app.com",
    to: slot.user.email,
    subject: "У вас запись",
    text: "У вас запись через 1 час.",
    html: "<b>Напоминание: У вас через 1 час запись к врачу.</b>",
  });
}

for (const slot of slotsOneDayRemaining) {
  console.log(slot);
  transporter.sendMail({
    from: "mis-app@app.com",
    to: slot.user.email,
    subject: "У вас запись",
    text: "This is a test email.",
    html: "<b>Напоминание: У вас через 1 день запись к врачу.</b>",
  });
}

console.log(
  "================================SEND MAIL==================================="
);
