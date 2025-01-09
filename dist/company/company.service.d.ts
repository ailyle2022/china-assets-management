import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyService {
    private readonly prisma;
    constructor();
    x: any;
    create(createCompanyDto: CreateCompanyDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    }>;
    findAll(): Promise<({
        vender: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            contact: string | null;
            email: string | null;
            address: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    })[]>;
    findOne(id: number): Promise<{
        vender: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            contact: string | null;
            email: string | null;
            address: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    }>;
    update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    }>;
}
