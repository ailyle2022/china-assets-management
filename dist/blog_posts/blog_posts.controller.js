"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsController = void 0;
const common_1 = require("@nestjs/common");
const blog_posts_service_1 = require("./blog_posts.service");
const create_blog_post_dto_1 = require("./dto/create-blog_post.dto");
const update_blog_post_dto_1 = require("./dto/update-blog_post.dto");
let BlogPostsController = class BlogPostsController {
    constructor(blogPostsService) {
        this.blogPostsService = blogPostsService;
    }
    create(createBlogPostDto) {
        return this.blogPostsService.create(createBlogPostDto);
    }
    findAll() {
        return this.blogPostsService.findAll();
    }
    findOne(id) {
        return this.blogPostsService.findOne(+id);
    }
    update(id, updateBlogPostDto) {
        return this.blogPostsService.update(+id, updateBlogPostDto);
    }
    remove(id) {
        return this.blogPostsService.remove(+id);
    }
};
exports.BlogPostsController = BlogPostsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_post_dto_1.CreateBlogPostDto]),
    __metadata("design:returntype", void 0)
], BlogPostsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogPostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogPostsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_post_dto_1.UpdateBlogPostDto]),
    __metadata("design:returntype", void 0)
], BlogPostsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogPostsController.prototype, "remove", null);
exports.BlogPostsController = BlogPostsController = __decorate([
    (0, common_1.Controller)('blog_posts'),
    __metadata("design:paramtypes", [blog_posts_service_1.BlogPostsService])
], BlogPostsController);
//# sourceMappingURL=blog_posts.controller.js.map