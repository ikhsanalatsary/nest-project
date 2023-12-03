import { OmitType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { type IAttendance } from '../entitities/attendance.entitity';

interface ICheckIn extends Omit<IAttendance, 'check_out' | 'id'> {
  time: string;
}
interface ICheckOut extends Omit<IAttendance, 'check_in' | 'id'> {
  time: string;
}

export class CheckIn implements ICheckIn {
  @IsInt()
  @IsNotEmpty()
  employee_id: number;

  @IsDateString({ strict: true })
  @IsNotEmpty()
  date: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  time: string;

  @IsLatitude()
  @IsNotEmpty()
  latitude: number;

  @IsLongitude()
  @IsNotEmpty()
  longitude: number;

  @IsBoolean()
  @IsOptional()
  check_in: boolean;
}

export class CheckOut extends OmitType(CheckIn, ['check_in']) implements ICheckOut {
  @IsBoolean()
  @IsOptional()
  check_out: boolean;
}
