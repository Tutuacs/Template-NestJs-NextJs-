"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Access = exports.ACCESS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ACCESS_KEY = 'roles';
const Access = (...role) => (0, common_1.SetMetadata)(exports.ACCESS_KEY, role);
exports.Access = Access;
//# sourceMappingURL=Access.decorator.js.map