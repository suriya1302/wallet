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
exports.WowaudittrailController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const wowaudittrail_service_1 = require("../../services/audit-trail/wowaudittrail.service");
(0, swagger_1.ApiTags)('Wow-Wallet-Audit-Trail-Api');
let WowaudittrailController = class WowaudittrailController {
    constructor(api) {
        this.api = api;
    }
    async AudittrailDetails(country_code, customer_id) {
        const data = await this.api.AudittrailDetails(country_code, customer_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('Wow-Wallet-Audit-Trail-Box'),
    __param(0, (0, common_1.Query)('country_code')),
    __param(1, (0, common_1.Query)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WowaudittrailController.prototype, "AudittrailDetails", null);
WowaudittrailController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [wowaudittrail_service_1.WowaudittrailService])
], WowaudittrailController);
exports.WowaudittrailController = WowaudittrailController;
//# sourceMappingURL=wowaudittrail.controller.js.map