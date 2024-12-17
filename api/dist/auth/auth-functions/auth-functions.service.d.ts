import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, RegisterDto } from '../Validation';
export declare class AuthFunctionsService extends PrismaService {
    findLogin(login: LoginDto): Promise<{
        id: string;
        email: string;
        role: number;
        name: string;
    }>;
    register(register: RegisterDto): Promise<{
        email: string;
        name: string;
        role: number;
        id: string;
    }>;
    profileInfo(id: string): Promise<{
        email: string;
        name: string;
        role: number;
        id: string;
    }>;
}
