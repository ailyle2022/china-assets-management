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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let BlogPostsService = class BlogPostsService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createBlogPostDto) {
        return this.prisma.blogPost.create({
            data: {
                title: createBlogPostDto.title,
                content: createBlogPostDto.content,
                status: createBlogPostDto.status,
                categoryId: createBlogPostDto.category.id,
            },
        });
    }
    async findAll() {
        return this.prisma.blogPost.findMany();
    }
    async findOne(id) {
        return this.prisma.blogPost.findUnique({
            where: { id },
            include: {
                category: true,
            },
        });
    }
    async update(id, updateBlogPostDto) {
        return this.prisma.blogPost.update({
            where: { id },
            data: {
                title: updateBlogPostDto.title,
                content: updateBlogPostDto.content,
                status: updateBlogPostDto.status,
                categoryId: updateBlogPostDto.category.id,
            },
        });
    }
    async remove(id) {
        return this.prisma.blogPost.delete({
            where: { id },
        });
    }
};
exports.BlogPostsService = BlogPostsService;
exports.BlogPostsService = BlogPostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BlogPostsService);
//# sourceMappingURL=blog_posts.service.js.map