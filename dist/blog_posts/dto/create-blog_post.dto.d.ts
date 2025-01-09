declare class CategoryDto {
    id: number;
}
export declare class CreateBlogPostDto {
    title: string;
    content?: string;
    status: string;
    category: CategoryDto;
}
export {};
