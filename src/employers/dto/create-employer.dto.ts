import { type IEmployer } from '../entities/employer.entity';

export class CreateEmployerDto implements Pick<IEmployer, 'name' | 'address'> {
  name: string;
  address: string;
}
