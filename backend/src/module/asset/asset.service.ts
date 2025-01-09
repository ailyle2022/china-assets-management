import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  x
  async create(createAssetDto: CreateAssetDto) {
    return this.prisma.asset.create({
      data: {
        serialNumber: createAssetDto.serialNumber,
        assetNumber: createAssetDto.assetNumber,
        name: createAssetDto.name,
        description: createAssetDto.description,
        purchaseDate: new Date(createAssetDto.purchaseDate),
        warrantyExpiry: new Date(createAssetDto.warrantyExpiry),
        localPrice: createAssetDto.localPrice,
        localCurrency: createAssetDto.localCurrency,
        globalPrice: createAssetDto.globalPrice,
        status: createAssetDto.status,
        locationId: createAssetDto.location.id,
        purchaseOrderId: createAssetDto.purchaseOrder.id,
      },
    });
  }

  async findAll() {
    return this.prisma.asset.findMany({
      include: {
        location: true,
        purchaseOrder: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.asset.findUnique({
      where: { id },
      include: {
        location: true,
        purchaseOrder: true,
      },
    });
  }

  async update(id: number, updateAssetDto: UpdateAssetDto) {
    return this.prisma.asset.update({
      where: { id },
      data: {
        serialNumber: updateAssetDto.serialNumber,
        assetNumber: updateAssetDto.assetNumber,
        name: updateAssetDto.name,
        description: updateAssetDto.description,
        purchaseDate: new Date(updateAssetDto.purchaseDate),
        warrantyExpiry: new Date(updateAssetDto.warrantyExpiry),
        localPrice: updateAssetDto.localPrice,
        localCurrency: updateAssetDto.localCurrency,
        purchaseOrderId: updateAssetDto.purchaseOrder.id,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.asset.delete({
      where: { id },
    });
  }
}