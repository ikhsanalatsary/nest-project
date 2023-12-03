import { Attendance } from 'src/attendances/entitities/attendance.entitity';
import { Department } from 'src/departments/entities/department.entity';
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Entity, OneToMany } from 'typeorm';

export interface IEmployee {
  id: number;
  name: string;
  age: number;
  gender: string;
  department_id: number;
  created_at: Date;
  updated_at: Date;
}

@Entity('employees')
export class Employee implements IEmployee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  department_id: number;

  @Column()
  age: number;

  @Column()
  gender: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Department, (departement) => departement.employees)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => Attendance, (attendance) => attendance.employee)
  attendances: Attendance[];
}
