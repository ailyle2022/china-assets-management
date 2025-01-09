import { IsString, IsOptional, IsIn, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class LocationDto {
    @IsInt()
    id: number;
}

class PurchaseOrderDto {
    @IsInt()
    id: number;
}

export class CreateAssetDto {
    @IsString()
    name?: string;

    @IsString()
    @IsOptional()
    serialNumber?: string;

    @IsString()
    @IsOptional()
    assetNumber?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    purchaseDate?: number;

    @IsString()
    @IsOptional()
    warrantyExpiry?: number;

    @IsString()
    @IsOptional()
    localPrice?: number;

    @IsString()
    @IsOptional()
    localCurrency?: string;

    @IsString()
    @IsOptional()
    globalPrice?: number;

    @IsString()
    @IsOptional()
    status?: string;

    @ValidateNested()
    @Type(() => LocationDto)
    location: LocationDto;

    @ValidateNested()
    @Type(() => PurchaseOrderDto)
    purchaseOrder: PurchaseOrderDto;

}
