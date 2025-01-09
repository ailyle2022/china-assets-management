declare class VenderDto {
    id: number;
}
export declare class CreateCompanyDto {
    name: string;
    contact?: string;
    email?: string;
    address?: string;
    vender: VenderDto;
}
export {};
