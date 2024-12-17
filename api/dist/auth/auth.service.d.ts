import { LoginDto } from './Validation/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './Validation';
import { AuthFunctionsService } from './auth-functions/auth-functions.service';
export declare class AuthService {
    private readonly authFunctions;
    private readonly jwt;
    private audience;
    private issuer;
    private refreshAudience;
    private refreshIssuer;
    private EXPIRE_TIME;
    constructor(authFunctions: AuthFunctionsService, jwt: JwtService);
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
    register(register: RegisterDto): Promise<{
        email: string;
        name: string;
        role: number;
        id: string;
    }>;
    createToken(profile: {
        id: string;
        email: string;
        role: number;
        name: string;
    }): Promise<{
        token: string;
    }>;
    createRefreshToken(profile: {
        id: string;
        email: string;
        role: number;
        name: string;
    }): Promise<{
        token: string;
    }>;
    createTokens(profile: {
        id: string;
        email: string;
        role: number;
        name: string;
    }): Promise<{
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
    refreshTokens(profile: {
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
    checkToken(token: string): Promise<any>;
    checkRefreshToken(token: string): Promise<any>;
    validToken(token: string): boolean;
    validRefreshToken(token: string): boolean;
}
