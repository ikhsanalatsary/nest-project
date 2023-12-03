import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Employer } from '../../employers/entities/employer.entity';
import { Employee } from '../../employees/entities/employee.entity';

export interface IDepartment {
  id: number;
  name: string;
  employer_id: number;
  created_at: Date;
  updated_at: Date;
}

@Entity({ name: 'departments' })
export class Department implements IDepartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  employer_id: number;

  @ManyToOne(() => Employer, (employer) => employer.departments)
  @JoinColumn({ name: 'employer_id' })
  employer: Employer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
