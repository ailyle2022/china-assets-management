declare class CompanyDto {
    id: number;
}
export declare class CreatePurchaseOrderDto {
    orderNumber: string;
    date?: string;
    company: CompanyDto;
}
export {};
