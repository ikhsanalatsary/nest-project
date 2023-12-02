import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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
}
