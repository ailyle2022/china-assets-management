import { BlogPostsService } from './blog_posts.service';
import { CreateBlogPostDto } from './dto/create-blog_post.dto';
import { UpdateBlogPostDto } from './dto/update-blog_post.dto';
export declare class BlogPostsController {
    private readonly blogPostsService;
    constructor(blogPostsService: BlogPostsService);
    create(createBlogPostDto: CreateBlogPostDto): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        category: {
            id: number;
            title: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateBlogPostDto: UpdateBlogPostDto): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
