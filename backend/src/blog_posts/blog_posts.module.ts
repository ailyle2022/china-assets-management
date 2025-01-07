import { Module } from '@nestjs/common';
import { BlogPostsService } from './blog_posts.service';
import { BlogPostsController } from './blog_posts.controller';

@Module({
  controllers: [BlogPostsController],
  providers: [BlogPostsService],
})
export class BlogPostsModule {}
