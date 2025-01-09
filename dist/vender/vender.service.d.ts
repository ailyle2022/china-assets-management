import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto';
export declare class VenderService {
    private readonly prisma;
    constructor();
    create(createVenderDto: CreateVenderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
    update(id: number, updateVenderDto: UpdateVenderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
}
