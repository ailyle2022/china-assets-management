import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
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
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        type: string;
    }>;
}
