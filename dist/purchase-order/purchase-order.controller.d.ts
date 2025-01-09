import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
export declare class PurchaseOrderController {
    private readonly purchaseOrderService;
    constructor(purchaseOrderService: PurchaseOrderService);
    create(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
    findAll(): Promise<({
        company: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            contact: string | null;
            email: string | null;
            address: string | null;
            venderId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    })[]>;
    findOne(id: string): Promise<{
        company: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            contact: string | null;
            email: string | null;
            address: string | null;
            venderId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
    update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
}
