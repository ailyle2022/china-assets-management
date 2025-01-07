import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostsModule } from './blog_posts/blog_posts.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [BlogPostsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
