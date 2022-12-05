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
Object.defineProperty(exports, "__esModule", { value: true });
exports.amount_transfer = exports.transfer = exports.fieldDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
class fieldDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "transaction_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "transaction_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "is_debit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "transaction_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "user_id_of_wallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "transaction_executed_by_user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "transaction_executed_via_app_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "is_executed_via_custom_app", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "transaction_ref_document_record_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "credit_entry_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "credit_entry_currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "debit_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "debit_entry_currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], fieldDetails.prototype, "wallet_closing_balance_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], fieldDetails.prototype, "wallet_closing_balance_currency", void 0);
exports.fieldDetails = fieldDetails;
class transfer {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "transaction_datetime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "is_debit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "transaction_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "user_id_of_wallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "transaction_executed_by_user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "transaction_executed_via_app_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], transfer.prototype, "is_executed_via_custom_app", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], transfer.prototype, "transaction_ref_document_record_ids", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "credit_entry_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "credit_entry_currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "debit_entry_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "debit_entry_currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], transfer.prototype, "wallet_closing_balance_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "wallet_closing_balance_currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], transfer.prototype, "receiver_wallet_id", void 0);
exports.transfer = transfer;
class amount_transfer {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", transfer)
], amount_transfer.prototype, "debit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", transfer)
], amount_transfer.prototype, "credit", void 0);
exports.amount_transfer = amount_transfer;
//# sourceMappingURL=moneytransaction.dto.js.map