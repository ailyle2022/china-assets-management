import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostsModule } from './blog_posts/blog_posts.module';
import { CategoriesModule } from './categories/categories.module';
import { LocationModule } from './location/location.module';
import { VenderModule } from './vender/vender.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [BlogPostsModule, CategoriesModule, LocationModule, VenderModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
