declare class CategoryDto {
    id: number;
}
export declare class UpdateBlogPostDto {
    title?: string;
    content?: string;
    status?: string;
    category: CategoryDto;
}
export {};
