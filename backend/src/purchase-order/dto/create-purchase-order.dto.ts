import { IsString, IsOptional, IsIn, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class CompanyDto {
    @IsInt()
    id: number;
}

export class CreatePurchaseOrderDto {
    @IsString()
    orderNumber: string;

    @IsString()
    @IsOptional()
    date?: string;

    @ValidateNested()
    @Type(() => CompanyDto)
    company: CompanyDto;
}
