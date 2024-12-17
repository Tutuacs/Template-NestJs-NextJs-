import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './Validation';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    login(login: LoginDto): Promise<{
        profile: {
            id: string;
            email: string;
            role: number;
            name: string;
        };
        tokens: {
            access: string;
            refresh: string;
            expiresIn: number;
        };
    }>;
    registerGym(register: RegisterDto): Promise<{
        email: string;
        name: string;
        role: number;
        id: string;
    }>;
    refreshToken(profile: {
        id: string;
        email: string;
        role: number;
        name: string;
    }): Promise<{
        profile: {
            email: string;
            name: string;
            role: number;
            id: string;
        };
        access: string;
        refresh: string;
        expiresIn: number;
    }>;
}
