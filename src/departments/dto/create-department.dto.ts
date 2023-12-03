import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { type IDepartment } from '../entities/department.entity';

export class CreateDepartmentDto implements Pick<IDepartment, 'name' | 'employer_id'> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  employer_id: number;
}
