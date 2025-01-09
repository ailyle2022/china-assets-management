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
exports.PurchaseOrderService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PurchaseOrderService = class PurchaseOrderService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createPurchaseOrderDto) {
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
    async findOne(id) {
        return this.prisma.purchaseOrder.findUnique({
            where: { id },
            include: {
                company: true,
            },
        });
    }
    async update(id, updatePurchaseOrderDto) {
        return this.prisma.purchaseOrder.update({
            where: { id },
            data: {
                orderNumber: updatePurchaseOrderDto.orderNumber,
                date: updatePurchaseOrderDto.date,
                companyId: updatePurchaseOrderDto.company.id,
            },
        });
    }
    async remove(id) {
        return this.prisma.purchaseOrder.delete({
            where: { id },
        });
    }
};
exports.PurchaseOrderService = PurchaseOrderService;
exports.PurchaseOrderService = PurchaseOrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PurchaseOrderService);
//# sourceMappingURL=purchase-order.service.js.map