"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamId = void 0;
const common_1 = require("@nestjs/common");
exports.ParamId = (0, common_1.createParamDecorator)((_data, context) => {
    return String(context.switchToHttp().getRequest().params.id);
});
//# sourceMappingURL=Param-Id.decorator.js.map