// src/blog_posts/dto/update-blog_post.dto.ts
import { IsString, IsOptional, IsIn, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CategoryDto {
  @IsInt()
  id: number;
}

export class UpdateBlogPostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  @IsIn(['draft', 'published', 'archived'])
  status?: string;

  @ValidateNested()
  @IsOptional()
  @Type(() => CategoryDto)
  category: CategoryDto;
}