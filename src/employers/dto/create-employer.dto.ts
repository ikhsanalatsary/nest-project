import { IsNotEmpty, IsString } from 'class-validator';
import { type IEmployer } from '../entities/employer.entity';

export class CreateEmployerDto implements Pick<IEmployer, 'name' | 'address'> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
