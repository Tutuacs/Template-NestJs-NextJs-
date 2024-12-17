import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProfileDto: CreateProfileDto): string;
    findAll(): string;
    findOne(id: number): string;
    findById(id: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        email: string | null;
        password: string | null;
        name: string | null;
        role: number;
        id: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProfileDto: UpdateProfileDto): string;
    remove(id: number): string;
}
