import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    existProfile(id: string): Promise<{
        email: string | null;
        password: string | null;
        name: string | null;
        role: number;
        id: string;
    }>;
    existProfileEmail(email: string): Promise<{
        email: string | null;
        password: string | null;
        name: string | null;
        role: number;
        id: string;
    }>;
}
