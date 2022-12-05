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
exports.MoneytransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const moneytransaction_dto_1 = require("../../../../models/dto/moneytransaction.dto");
const moneytransaction_service_1 = require("../../services/access-ther-user-details/moneytransaction.service");
let MoneytransactionController = class MoneytransactionController {
    constructor(api) {
        this.api = api;
    }
    async postamountdetails(customer_id, country_code, dateandmonth, user_id, send_user_id, Time_Zone, entry_data) {
        const data = await this.api.postamountdetails(customer_id, country_code, entry_data, dateandmonth, user_id, send_user_id, Time_Zone);
        console.log('data', data);
        return data;
    }
};
__decorate([
    (0, common_1.Post)("post-amount-from-inputfield"),
    __param(0, (0, common_1.Query)("customer_id")),
    __param(1, (0, common_1.Query)("country_code")),
    __param(2, (0, common_1.Query)("dateandmonth")),
    __param(3, (0, common_1.Query)("user_id")),
    __param(4, (0, common_1.Query)("send_user_id")),
    __param(5, (0, common_1.Query)("Time_Zone")),
    __param(6, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, moneytransaction_dto_1.fieldDetails]),
    __metadata("design:returntype", Promise)
], MoneytransactionController.prototype, "postamountdetails", null);
MoneytransactionController = __decorate([
    (0, swagger_1.ApiTags)("Money-Transaction-Api"),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [moneytransaction_service_1.MoneytransactionService])
], MoneytransactionController);
exports.MoneytransactionController = MoneytransactionController;
//# sourceMappingURL=moneytransaction.controller.js.map