import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
        venderId: number;
    }>;
    remove(id: string): Promise<{
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
