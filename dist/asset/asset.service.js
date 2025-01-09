"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let AssetService = class AssetService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createAssetDto) {
        return this.prisma.asset.create({
            data: {
                serialNumber: createAssetDto.serialNumber,
                assetNumber: createAssetDto.assetNumber,
                name: createAssetDto.name,
                description: createAssetDto.description,
                warrantyExpiry: createAssetDto.warrantyExpiry,
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
    async findOne(id) {
        return this.prisma.asset.findUnique({
            where: { id },
            include: {
                location: true,
                purchaseOrder: true,
            },
        });
    }
    async update(id, updateAssetDto) {
        return this.prisma.asset.update({
            where: { id },
            data: {
                serialNumber: updateAssetDto.serialNumber,
                assetNumber: updateAssetDto.assetNumber,
                name: updateAssetDto.name,
                description: updateAssetDto.description,
                warrantyExpiry: updateAssetDto.warrantyExpiry,
                localPrice: updateAssetDto.localPrice,
                localCurrency: updateAssetDto.localCurrency,
                globalPrice: updateAssetDto.globalPrice,
                status: updateAssetDto.status,
                locationId: updateAssetDto.location.id,
                purchaseOrderId: updateAssetDto.purchaseOrder.id,
            },
        });
    }
    async remove(id) {
        return this.prisma.asset.delete({
            where: { id },
        });
    }
};
exports.AssetService = AssetService;
exports.AssetService = AssetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AssetService);
//# sourceMappingURL=asset.service.js.map