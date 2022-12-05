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
exports.UsernameController = void 0;
const common_1 = require("@nestjs/common");
const username_service_1 = require("../../services/last_ten_transcation/username.service");
let UsernameController = class UsernameController {
    constructor(api) {
        this.api = api;
    }
    async wowwalletDetails(country_id, country_code, login_user_id) {
        const data = await this.api.username(country_id, country_code, login_user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('find-user-name-for-pdf'),
    __param(0, (0, common_1.Query)('country_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], UsernameController.prototype, "wowwalletDetails", null);
UsernameController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [username_service_1.UsernameService])
], UsernameController);
exports.UsernameController = UsernameController;
//# sourceMappingURL=username.controller.js.map