import { AbstractService } from "../../../common/abstract-service.js";
import { ApiException } from "../../../errors/api.exception.js";
import { HttpCode } from "../../../misc/http-codes.js";
import { APPOINTMENT } from "../../../misc/schema.keys.js";

export class AppointmentService extends AbstractService {
  constructor(slotService, userService, doctorService, scheduleService) {
    super({ repositoryKey: APPOINTMENT });
    this.slotService = slotService;
    this.userService = userService;
    this.doctorService = doctorService;
    this.scheduleService = scheduleService;
  }

  async makeAppointment(userId, doctorId, datetime) {
    const doctor = await this.doctorService.findOneById(doctorId);

    const tmp = new Date(datetime);

    const appointmentTime = new Date(
      tmp.getTime() - tmp.getTimezoneOffset() * 60000
    );

    const scheduleDate = new Date(datetime.split(" ")[0]);

    const schedule = await this.scheduleService.findOneWhere({
      doctorId: doctor.id,
      date: scheduleDate,
    });

    const slot = await this.slotService.findOneWhere({
      scheduleId: schedule.id,
      time: appointmentTime,
    });

    await this.#checkIfSlotIsAvailable(slot);

    const user = await this.userService.findOneById(userId);

    return await this.create({ userId: user.id, slotId: slot.id });
  }

  async #checkIfSlotIsAvailable(slot) {
    const appointment = await this.findOneNullableWhere({
      slotId: slot.id,
    });

    if (appointment) {
      throw new ApiException(`Слот уже занят`, HttpCode.BAD_REQUEST);
    }
  }
}
