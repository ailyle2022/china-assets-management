import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationService {
    private readonly prisma;
    constructor();
    create(createLocationDto: CreateLocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
}
