import { Body, Controller, Post } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CheckIn, CheckOut } from './dto/attendance.dto';

@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post('check-in')
  async checkIn(@Body() payload: CheckIn) {
    payload.check_in = true;
    return this.attendancesService.checkIn(payload);
  }

  @Post('check-out')
  async checkOut(@Body() payload: CheckOut) {
    payload.check_out = true;
    return this.attendancesService.checkOut(payload);
  }
}
