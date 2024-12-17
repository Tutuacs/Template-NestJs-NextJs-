import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(createProfileDto: CreateProfileDto): string;
    getUserProfile(id: string): Promise<{
        email: string | null;
        password: string | null;
        name: string | null;
        role: number;
        id: string;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProfileDto: UpdateProfileDto): string;
    remove(id: string): string;
}
