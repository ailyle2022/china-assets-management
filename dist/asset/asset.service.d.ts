import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
export declare class AssetService {
    private readonly prisma;
    constructor();
    x: any;
    create(createAssetDto: CreateAssetDto): Promise<{
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        serialNumber: string | null;
        assetNumber: string | null;
        description: string | null;
        warrantyExpiry: string | null;
        localPrice: number;
        localCurrency: string;
        globalPrice: number;
        locationId: number;
        purchaseOrderId: number;
    }>;
    findAll(): Promise<({
        purchaseOrder: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            date: string | null;
            companyId: number;
        };
        location: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            type: string;
        };
    } & {
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        serialNumber: string | null;
        assetNumber: string | null;
        description: string | null;
        warrantyExpiry: string | null;
        localPrice: number;
        localCurrency: string;
        globalPrice: number;
        locationId: number;
        purchaseOrderId: number;
    })[]>;
    findOne(id: number): Promise<{
        purchaseOrder: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            orderNumber: string;
            date: string | null;
            companyId: number;
        };
        location: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            type: string;
        };
    } & {
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        serialNumber: string | null;
        assetNumber: string | null;
        description: string | null;
        warrantyExpiry: string | null;
        localPrice: number;
        localCurrency: string;
        globalPrice: number;
        locationId: number;
        purchaseOrderId: number;
    }>;
    update(id: number, updateAssetDto: UpdateAssetDto): Promise<{
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        serialNumber: string | null;
        assetNumber: string | null;
        description: string | null;
        warrantyExpiry: string | null;
        localPrice: number;
        localCurrency: string;
        globalPrice: number;
        locationId: number;
        purchaseOrderId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        serialNumber: string | null;
        assetNumber: string | null;
        description: string | null;
        warrantyExpiry: string | null;
        localPrice: number;
        localCurrency: string;
        globalPrice: number;
        locationId: number;
        purchaseOrderId: number;
    }>;
}
