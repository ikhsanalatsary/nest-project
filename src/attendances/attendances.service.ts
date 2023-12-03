import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Attendance } from './entitities/attendance.entitity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckIn, CheckOut } from './dto/attendance.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class AttendancesService {
  constructor(@InjectRepository(Attendance) private readonly attendanceRepository: Repository<Attendance>) {}

  async checkIn(checkInData: CheckIn) {
    try {
      const attendance = this.attendanceRepository.create(checkInData);
      const [hh, mm] = checkInData.time.split(':');
      attendance.date = dayjs(attendance.date).set('hour', Number(hh)).set('minute', Number(mm)).toDate();
      attendance.check_out = false;
      await this.attendanceRepository.insert(attendance);
      return { message: 'Berhasil Check-in' };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async checkOut(checkOutData: CheckOut) {
    try {
      const attendance = this.attendanceRepository.create(checkOutData);
      const [hh, mm] = checkOutData.time.split(':');
      attendance.date = dayjs(attendance.date).set('hour', Number(hh)).set('minute', Number(mm)).toDate();
      attendance.check_in = false;
      await this.attendanceRepository.insert(attendance);
      return { message: 'Berhasil Check-out' };
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
