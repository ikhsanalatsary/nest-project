import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employer } from './entities/employer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployersService {
  constructor(@InjectRepository(Employer) private readonly employerRepository: Repository<Employer>) {}

  async create(createEmployerDto: CreateEmployerDto) {
    try {
      const employer = this.employerRepository.create(createEmployerDto);
      const result = await this.employerRepository.save(employer);
      return result;
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  async findAll() {
    return this.employerRepository.find({ relations: { departments: true } });
  }

  async findOne(id: number) {
    try {
      const result = await this.employerRepository.findOne({ where: { id }, relations: { departments: true } });
      if (result) {
        return result;
      }

      return Promise.reject(new NotFoundException('Data tidak ditemukan'));
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: number, updateEmployerDto: UpdateEmployerDto) {
    try {
      const employer = this.employerRepository.create(updateEmployerDto);
      const result = await this.employerRepository.update(id, employer);
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
      return await this.employerRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
