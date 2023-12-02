import { Module } from '@nestjs/common';
import { EmployersService } from './employers.service';
import { EmployersController } from './employers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employer } from './entities/employer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employer])],
  controllers: [EmployersController],
  providers: [EmployersService],
})
export class EmployersModule {}
