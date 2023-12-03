import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { type IEmployee } from '../entities/employee.entity';

export class CreateEmployeeDto implements Omit<IEmployee, 'id' | 'created_at' | 'updated_at'> {
  @IsInt()
  @IsOptional()
  age: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsInt()
  @IsNotEmpty()
  department_id: number;
}
