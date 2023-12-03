import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(@InjectRepository(Department) private readonly departmentRepository: Repository<Department>) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = this.departmentRepository.create(createDepartmentDto);
      const result = await this.departmentRepository.save(department);
      return result;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findAll() {
    return this.departmentRepository.find({ relations: { employer: true, employees: true } });
  }

  async findOne(id: number) {
    try {
      const result = await this.departmentRepository.findOne({
        where: { id },
        relations: { employer: true },
      });
      if (result) {
        return result;
      }

      return Promise.reject(new NotFoundException('Data tidak ditemukan'));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      const departement = this.departmentRepository.create(updateDepartmentDto);
      const result = await this.departmentRepository.update(id, departement);
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
      return await this.departmentRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
