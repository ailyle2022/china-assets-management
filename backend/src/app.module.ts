import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './module/asset/asset.module';
import { PurchaseOrderModule } from './module/purchase-order/purchase-order.module';
import { CompanyModule } from './module/company/company.module';
import { VenderModule } from './module/vender/vender.module';
import { LocationModule } from './module/location/location.module';
import { CategoriesModule } from './module/categories/categories.module';
import { BlogPostsModule } from './module/blog_posts/blog_posts.module';


@Module({
  imports: [BlogPostsModule, CategoriesModule, LocationModule, VenderModule, CompanyModule, PurchaseOrderModule, AssetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
