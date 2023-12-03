import { Department } from 'src/departments/entities/department.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export interface IEmployer {
  id: number;
  name: string;
  address: string;
  created_at: Date;
  updated_at: Date;
}

@Entity({ name: 'employers' })
export class Employer implements IEmployer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Department, (departement) => departement.employer)
  departments: Department[];
}
