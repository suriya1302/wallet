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
exports.FirstdropdownlistController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const firstdropdownlist_service_1 = require("../../services/access-ther-user-details/firstdropdownlist.service");
let FirstdropdownlistController = class FirstdropdownlistController {
    constructor(Secondcomponent) {
        this.Secondcomponent = Secondcomponent;
    }
    async LastTenTransactionDetails(country_id, country_code, login_user_id) {
        const data = await this.Secondcomponent.transactionDetails(country_id, country_code, login_user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
    async table2(date1, date2, country_code, customer_id, login_user_id) {
        try {
            const data = await this.Secondcomponent.table2(country_code, customer_id, login_user_id, date1, date2);
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
};
__decorate([
    (0, common_1.Get)('secondComponent-Last-10-Transactions'),
    __param(0, (0, common_1.Query)('country_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], FirstdropdownlistController.prototype, "LastTenTransactionDetails", null);
__decorate([
    (0, common_1.Get)('SecondComponent-Access-older-transactions'),
    __param(0, (0, common_1.Query)('date1')),
    __param(1, (0, common_1.Query)('date2')),
    __param(2, (0, common_1.Query)('country_code')),
    __param(3, (0, common_1.Query)('customer_id')),
    __param(4, (0, common_1.Query)('login_user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], FirstdropdownlistController.prototype, "table2", null);
FirstdropdownlistController = __decorate([
    (0, swagger_1.ApiTags)('Access-other-user-wow-wallet-transactions'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [firstdropdownlist_service_1.FirstdropdownlistService])
], FirstdropdownlistController);
exports.FirstdropdownlistController = FirstdropdownlistController;
//# sourceMappingURL=firstdropdownlist.controller.js.map