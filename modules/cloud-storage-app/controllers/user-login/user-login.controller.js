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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../../../models/dto/user.dto");
const user_login_service_1 = require("./../../services/user-login/user-login.service");
let UserLoginController = class UserLoginController {
    constructor(_userLoginService) {
        this._userLoginService = _userLoginService;
    }
    async onUserRegister(_data) {
        try {
            const data = await this._userLoginService.onUserRegister(_data);
            return Object.assign({}, data);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.NewUserDto]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "onUserRegister", null);
UserLoginController = __decorate([
    (0, swagger_1.ApiTags)('User Login'),
    (0, common_1.Controller)('user-login'),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService])
], UserLoginController);
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=user-login.controller.js.map