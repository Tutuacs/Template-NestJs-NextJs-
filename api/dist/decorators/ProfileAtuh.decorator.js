"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileAuth = void 0;
const common_1 = require("@nestjs/common");
exports.ProfileAuth = (0, common_1.createParamDecorator)((filterData, context) => {
    const request = context.switchToHttp().getRequest();
    if (request.profile) {
        if (filterData) {
            return request.profile[filterData];
        }
        else {
            return request.profile;
        }
    }
    else {
        throw new common_1.ForbiddenException('Usuário logado não encontrado no banco de dados, Use o AuthGuard para obter o usuário');
    }
});
//# sourceMappingURL=ProfileAtuh.decorator.js.map