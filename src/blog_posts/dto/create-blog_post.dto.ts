import { IsString, IsOptional, IsIn, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

class CategoryDto {
  @IsInt()
  id: number;
}

export class CreateBlogPostDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsIn(['draft', 'published', 'archived'])
  status: string;

  @ValidateNested()
  @Type(() => CategoryDto)
  category: CategoryDto;
}