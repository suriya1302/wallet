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
exports.LastTenTranscationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const last_ten_transcation_service_1 = require("../../services/last_ten_transcation/last_ten_transcation.service");
let LastTenTranscationController = class LastTenTranscationController {
    constructor(LastTentransaction) {
        this.LastTentransaction = LastTentransaction;
    }
    async LastTenTransactionDetails(country_id, country_code, login_user_id) {
        const data = await this.LastTentransaction.transactionDetails(country_id, country_code, login_user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
    async table2(date1, date2, country_code, customer_id, login_user_id) {
        try {
            const data = await this.LastTentransaction.table2(country_code, customer_id, login_user_id, date1, date2);
            return {
                "status": "200",
                "message": "Access Older Transaction Successfull",
                data
            };
        }
        catch (error) {
            throw error;
        }
    }
    async wowwalletDetails(country_id, country_code, login_user_id) {
        const data = await this.LastTentransaction.wowwalletDetails(country_id, country_code, login_user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
    async getwalletdropdownlistapi(customer_id, country_code) {
        const data = await this.LastTentransaction.getwalletdropdownlistapi(country_code, customer_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
    async getwalletDetails(customer_id, country_code, user_category_id, user_id) {
        const data = await this.LastTentransaction.getwalletDetails(customer_id, country_code, user_category_id, user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('Last-10-Transactions'),
    __param(0, (0, common_1.Query)('country_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], LastTenTranscationController.prototype, "LastTenTransactionDetails", null);
__decorate([
    (0, common_1.Get)('Access-older-transactions'),
    __param(0, (0, common_1.Query)('date1')),
    __param(1, (0, common_1.Query)('date2')),
    __param(2, (0, common_1.Query)('country_code')),
    __param(3, (0, common_1.Query)('customer_id')),
    __param(4, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], LastTenTranscationController.prototype, "table2", null);
__decorate([
    (0, common_1.Get)('wow-wallet-userid-and-balance-api'),
    __param(0, (0, common_1.Query)('country_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], LastTenTranscationController.prototype, "wowwalletDetails", null);
__decorate([
    (0, common_1.Get)('Transfer-to-get-wallet-dropdownlist-api'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], LastTenTranscationController.prototype, "getwalletdropdownlistapi", null);
__decorate([
    (0, common_1.Get)('Transfer-to-get-wallet-Api'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('user_category_id')),
    __param(3, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String]),
    __metadata("design:returntype", Promise)
], LastTenTranscationController.prototype, "getwalletDetails", null);
LastTenTranscationController = __decorate([
    (0, swagger_1.ApiTags)('Your wow Wallet'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [last_ten_transcation_service_1.LastTenTranscationService])
], LastTenTranscationController);
exports.LastTenTranscationController = LastTenTranscationController;
//# sourceMappingURL=last_ten_transcation.controller.js.map