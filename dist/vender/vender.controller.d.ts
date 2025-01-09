import { VenderService } from './vender.service';
import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto';
export declare class VenderController {
    private readonly venderService;
    constructor(venderService: VenderService);
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
    update(id: string, updateVenderDto: UpdateVenderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        contact: string | null;
        email: string | null;
        address: string | null;
    }>;
}
