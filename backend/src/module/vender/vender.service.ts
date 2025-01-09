// src/categories/categories.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto';

@Injectable()
export class VenderService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createVenderDto: CreateVenderDto) {
    return this.prisma.vender.create({
      data: createVenderDto,
    });
  }

  async findAll() {
    return this.prisma.vender.findMany();
  }

  async findOne(id: number) {
    const result =  this.prisma.vender.findUnique({
      where: { id },
    });

    return result;
  }

  async update(id: number, updateVenderDto: UpdateVenderDto) {
    return this.prisma.vender.update({
      where: { id },
      data: updateVenderDto,
    });
  }

  async remove(id: number) {
    return this.prisma.vender.delete({
      where: { id },
    });
  }
}