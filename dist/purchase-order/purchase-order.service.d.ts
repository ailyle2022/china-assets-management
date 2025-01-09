import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
export declare class PurchaseOrderService {
    private readonly prisma;
    constructor();
    x: any;
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
    findOne(id: number): Promise<{
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
    update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        date: string | null;
        companyId: number;
    }>;
}
