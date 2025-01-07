import { IsOptional, IsString } from "class-validator";

export class CreateVenderDto {
    @IsString()
      name: string;
    
      @IsString()
      @IsOptional()
      contact?: string;

      @IsString()
      @IsOptional()
      emaill?: string;

      @IsString()
      @IsOptional()
      address?: string;
}
