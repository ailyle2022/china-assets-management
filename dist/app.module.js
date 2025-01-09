"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const blog_posts_module_1 = require("./blog_posts/blog_posts.module");
const categories_module_1 = require("./categories/categories.module");
const location_module_1 = require("./location/location.module");
const vender_module_1 = require("./vender/vender.module");
const company_module_1 = require("./company/company.module");
const purchase_order_module_1 = require("./purchase-order/purchase-order.module");
const asset_module_1 = require("./asset/asset.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [blog_posts_module_1.BlogPostsModule, categories_module_1.CategoriesModule, location_module_1.LocationModule, vender_module_1.VenderModule, company_module_1.CompanyModule, purchase_order_module_1.PurchaseOrderModule, asset_module_1.AssetModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map