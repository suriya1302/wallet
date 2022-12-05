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
exports.WowwalletmoneytransactionController = void 0;
const common_1 = require("@nestjs/common");
const moneytransaction_dto_1 = require("../../../../models/dto/moneytransaction.dto");
const wowwalletmoneytransaction_service_1 = require("../../services/access-ther-user-details/wowwalletmoneytransaction.service");
let WowwalletmoneytransactionController = class WowwalletmoneytransactionController {
    constructor(api) {
        this.api = api;
    }
    async transfer(country_code, customer_id, time_zone, login_id, amount_transfer) {
        try {
            const data = await this.api.amount_transfer(country_code, customer_id, time_zone, login_id, amount_transfer);
            console.log("controller file");
            console.log("country_code", country_code);
            console.log("customer_id", customer_id);
            console.log("time_zone", time_zone);
            console.log("body", amount_transfer);
            console.log("--------------------------------");
            return {
                status: '200',
                message: 'transfer success',
                data,
            };
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)('secondComponent-Transfer-to-wow-wallet-API'),
    __param(0, (0, common_1.Query)('country_code')),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('time_zone')),
    __param(3, (0, common_1.Query)('login_id')),
    __param(4, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number, moneytransaction_dto_1.transfer]),
    __metadata("design:returntype", Promise)
], WowwalletmoneytransactionController.prototype, "transfer", null);
WowwalletmoneytransactionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [wowwalletmoneytransaction_service_1.WowwalletmoneytransactionService])
], WowwalletmoneytransactionController);
exports.WowwalletmoneytransactionController = WowwalletmoneytransactionController;
//# sourceMappingURL=wowwalletmoneytransaction.controller.js.map