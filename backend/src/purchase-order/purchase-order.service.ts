import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';

@Injectable()
export class PurchaseOrderService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
x
  async create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.prisma.purchaseOrder.create({
      data: {
        orderNumber: createPurchaseOrderDto.orderNumber,
        date: createPurchaseOrderDto.date,
        companyId: createPurchaseOrderDto.company.id,
      },
    });
  }

  async findAll() {
    return this.prisma.purchaseOrder.findMany({
      include: {
        company: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.purchaseOrder.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });
  }

  async update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.prisma.purchaseOrder.update({
      where: { id },
      data: {
        orderNumber: updatePurchaseOrderDto.orderNumber,
        date: updatePurchaseOrderDto.date,
        companyId: updatePurchaseOrderDto.company.id,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.purchaseOrder.delete({
      where: { id },
    });
  }
}