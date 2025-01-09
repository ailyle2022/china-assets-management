declare class LocationDto {
    id: number;
}
declare class PurchaseOrderDto {
    id: number;
}
export declare class CreateAssetDto {
    name?: string;
    serialNumber?: string;
    assetNumber?: string;
    description?: string;
    warrantyExpiry?: string;
    localPrice?: number;
    localCurrency?: string;
    globalPrice?: number;
    status?: string;
    location: LocationDto;
    purchaseOrder: PurchaseOrderDto;
}
export {};
