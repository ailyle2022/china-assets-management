import { IsOptional, IsString } from "class-validator";

export class CreateVenderDto {
    @IsString()
      name: string;

      @IsString()
      @IsOptional()
      title?: string;
    
      @IsString()
      @IsOptional()
      contact?: string;

      @IsString()
      @IsOptional()
      email?: string;

      @IsString()
      @IsOptional()
      address?: string;
}
