import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBlogPostDto } from './dto/create-blog_post.dto';
import { UpdateBlogPostDto } from './dto/update-blog_post.dto';

@Injectable()
export class BlogPostsService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
x
  async create(createBlogPostDto: CreateBlogPostDto) {
    return this.prisma.blogPost.create({
      data: {
        title: createBlogPostDto.title,
        content: createBlogPostDto.content,
        status: createBlogPostDto.status,
        categoryId: createBlogPostDto.category.id, // 使用 categoryId
      },
    });
  }

  async findAll() {
    return this.prisma.blogPost.findMany();
  }

  async findOne(id: number) {
    return this.prisma.blogPost.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }

  async update(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    return this.prisma.blogPost.update({
      where: { id },
      data: {
        title: updateBlogPostDto.title,
        content: updateBlogPostDto.content,
        status: updateBlogPostDto.status,
        categoryId: updateBlogPostDto.category.id, // 使用 categoryId
      },
    });
  }

  async remove(id: number) {
    return this.prisma.blogPost.delete({
      where: { id },
    });
  }
}