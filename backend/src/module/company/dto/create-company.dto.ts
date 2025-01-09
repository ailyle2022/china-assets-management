import { IsString, IsOptional, IsIn, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class VenderDto {
    @IsInt()
    id: number;
}

export class CreateCompanyDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    contact?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @ValidateNested()
    @Type(() => VenderDto)
    vender: VenderDto;
}
