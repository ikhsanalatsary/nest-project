import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export interface IAttendance {
  id: number;
  employee_id: number;
  date: Date;
  latitude: number;
  longitude: number;
  check_in: boolean;
  check_out: boolean;
}

@Entity({ name: 'attendances' })
export class Attendance implements IAttendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employee_id: number;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @Column()
  check_in: boolean;

  @Column()
  check_out: boolean;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;
}
