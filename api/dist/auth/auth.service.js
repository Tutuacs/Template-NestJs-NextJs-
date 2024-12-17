"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_functions_service_1 = require("./auth-functions/auth-functions.service");
const process_1 = require("process");
let AuthService = class AuthService {
    constructor(authFunctions, jwt) {
        this.authFunctions = authFunctions;
        this.jwt = jwt;
        this.audience = 'profile';
        this.issuer = 'auth-token';
        this.refreshAudience = 'refresh';
        this.refreshIssuer = 'refresh-token';
        this.EXPIRE_TIME = 20 * 1000;
    }
    async login(login) {
        const user = await this.authFunctions.findLogin(login);
        return this.createTokens(user);
    }
    async register(register) {
        if (register.name) {
            if (register.name.length === 0) {
                register.name = register.email.split('@')[0];
            }
        }
        register.name = register.email.split('@')[0];
        return this.authFunctions.register(register);
    }
    async createToken(profile) {
        return {
            token: await this.jwt.signAsync({
                id: profile.id,
                email: profile.email,
                role: profile.role,
                name: profile.name,
            }, {
                expiresIn: '20s',
                subject: profile.id,
                issuer: this.issuer,
                audience: this.audience,
                secret: process_1.env.JWT_TOKEN_SECRET,
            }),
        };
    }
    async createRefreshToken(profile) {
        return {
            token: await this.jwt.signAsync({
                id: profile.id,
                email: profile.email,
                role: profile.role,
                name: profile.name,
            }, {
                expiresIn: '7d',
                subject: profile.id,
                issuer: this.refreshIssuer,
                audience: this.refreshAudience,
                secret: process_1.env.JWT_REFRESH_SECRET,
            }),
        };
    }
    async createTokens(profile) {
        const token = (await this.createToken(profile)).token;
        const refreshToken = (await this.createRefreshToken(profile)).token;
        const tokens = {
            profile,
            tokens: {
                access: token,
                refresh: refreshToken,
                expiresIn: new Date().setTime(new Date().getTime() + this.EXPIRE_TIME),
            },
        };
        return tokens;
    }
    async refreshTokens(profile) {
        const token = (await this.createToken(profile)).token;
        const refreshToken = (await this.createRefreshToken(profile)).token;
        const atualizedProfile = await this.authFunctions.profileInfo(profile.id);
        return {
            profile: atualizedProfile,
            access: token,
            refresh: refreshToken,
            expiresIn: new Date().setTime(new Date().getTime() + this.EXPIRE_TIME),
        };
    }
    async checkToken(token) {
        try {
            const data = this.jwt.verify(token, {
                audience: this.audience,
                issuer: this.issuer,
                secret: process_1.env.JWT_TOKEN_SECRET,
            });
            return data;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('O token não foi identificado');
        }
    }
    async checkRefreshToken(token) {
        try {
            const data = this.jwt.verify(token, {
                audience: this.refreshAudience,
                issuer: this.refreshIssuer,
                secret: process_1.env.JWT_REFRESH_SECRET,
            });
            return data;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('O token não foi identificado');
        }
    }
    validToken(token) {
        try {
            this.checkToken(token);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    validRefreshToken(token) {
        try {
            this.checkRefreshToken(token);
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_functions_service_1.AuthFunctionsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map