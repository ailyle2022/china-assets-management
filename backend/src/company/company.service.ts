import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
x
  async create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({
      data: {
        name: createCompanyDto.name,
        address: createCompanyDto.address,
        contact: createCompanyDto.contact,
        email: createCompanyDto.email,
        venderId: createCompanyDto.vender.id,
      },
    });
  }

  async findAll() {
    return this.prisma.company.findMany({
      include: {
        vender: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
      include: {
        vender: true,
      },
    });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: {
        name: updateCompanyDto.name,
        address: updateCompanyDto.address,
        contact: updateCompanyDto.contact,
        email: updateCompanyDto.email,
        venderId: updateCompanyDto.vender.id,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}