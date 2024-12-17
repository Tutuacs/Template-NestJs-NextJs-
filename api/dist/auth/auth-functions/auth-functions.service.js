"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFunctionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthFunctionsService = class AuthFunctionsService extends prisma_service_1.PrismaService {
    async findLogin(login) {
        const profile = await this.profile.findFirst({
            where: {
                email: login.email,
            },
            select: {
                id: true,
                email: true,
                name: true,
                password: true,
                role: true,
            },
        });
        if (profile && (await bcrypt.compare(login.password, profile.password))) {
            return {
                id: profile.id,
                email: profile.email,
                role: profile.role,
                name: profile.name,
            };
        }
        else {
            throw new common_1.UnauthorizedException('Usuário ou senha incorretos');
        }
    }
    async register(register) {
        const profile = await this.existProfileEmail(register.email);
        if (profile) {
            throw new common_1.ConflictException('Email já cadastrado');
        }
        return this.profile.create({
            data: {
                email: register.email,
                name: register.name,
                password: await bcrypt.hash(register.password, 10),
                role: register.role,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
    }
    async profileInfo(id) {
        return this.profile.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });
    }
};
exports.AuthFunctionsService = AuthFunctionsService;
exports.AuthFunctionsService = AuthFunctionsService = __decorate([
    (0, common_1.Injectable)()
], AuthFunctionsService);
//# sourceMappingURL=auth-functions.service.js.map