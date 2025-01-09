import { CreateBlogPostDto } from './dto/create-blog_post.dto';
import { UpdateBlogPostDto } from './dto/update-blog_post.dto';
export declare class BlogPostsService {
    private readonly prisma;
    constructor();
    x: any;
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
    findOne(id: number): Promise<{
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
    update(id: number, updateBlogPostDto: UpdateBlogPostDto): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        content: string;
        status: string;
        categoryId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
