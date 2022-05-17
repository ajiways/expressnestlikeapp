import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const client = new PrismaClient();

const doctor1 = await client.doctor.create({
  data: {
    name: "Олег",
    spec: "Терапевт",
  },
});

const doctor2 = await client.doctor.create({
  data: {
    name: "Павел",
    spec: "Кардиолог",
  },
});

const user = await client.user.create({
  data: {
    email: "user@email.com",
    name: "Михаил",
  },
});

const schedule_doctor_1 = await client.schedule.create({
  data: {
    date: new Date("2022-05-24"),
    doctorId: doctor1.id,
  },
});

const schedule_doctor_2 = await client.schedule.create({
  data: {
    date: new Date("2022-05-24"),
    doctorId: doctor2.id,
  },
});

const slot_1_doctor_1 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 13:00"),
    scheduleId: schedule_doctor_1.id,
  },
});
const slot_2_doctor_1 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 13:30"),
    scheduleId: schedule_doctor_1.id,
  },
});
const slot_3_doctor_1 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 14:00"),
    scheduleId: schedule_doctor_1.id,
  },
});
const slot_4_doctor_1 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 14:30"),
    scheduleId: schedule_doctor_1.id,
  },
});

const slot_1_doctor_2 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 13:00"),
    scheduleId: schedule_doctor_2.id,
  },
});
const slot_2_doctor_2 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 13:30"),
    scheduleId: schedule_doctor_2.id,
  },
});
const slot_3_doctor_2 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 14:00"),
    scheduleId: schedule_doctor_2.id,
  },
});
const slot_4_doctor_2 = await client.slot.create({
  data: {
    time: new Date("2022-05-15 14:30"),
    scheduleId: schedule_doctor_2.id,
  },
});

const appointment_doctor_1_slot_1 = await client.appointment.create({
  data: { slotId: slot_1_doctor_1.id, userId: user.id },
});

const appointment_doctor_2_slot_1 = await client.appointment.create({
  data: { slotId: slot_1_doctor_2.id, userId: user.id },
});
