import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {
  constructor(@InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(createEmployeeDto);
      const result = await this.employeeRepository.save(employee);
      return result;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findAll() {
    return this.employeeRepository.find({ relations: { department: true } });
  }

  async findOne(id: number) {
    try {
      const result = await this.employeeRepository.findOne({
        where: { id },
        relations: { department: true },
      });
      if (result) {
        return result;
      }

      return Promise.reject(new NotFoundException('Data tidak ditemukan'));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(updateEmployeeDto);
      const result = await this.employeeRepository.update(id, employee);
      if (Number(result.affected) === 0) {
        return Promise.reject(new NotFoundException('Data tidak ditemukan'));
      }
      return this.findOne(id);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.employeeRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
