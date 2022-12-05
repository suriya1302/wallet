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
exports.DropdownlistfirsttableController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dropdownlistfirsttable_service_1 = require("../../services/access-ther-user-details/dropdownlistfirsttable.service");
let DropdownlistfirsttableController = class DropdownlistfirsttableController {
    constructor(dropdownlisttable) {
        this.dropdownlisttable = dropdownlisttable;
    }
    async getwalletdropdownlistapi(customer_id, country_code) {
        const data = await this.dropdownlisttable.getwalletdropdownlistapi(country_code, customer_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
    async getwalletDetails(customer_id, country_code, user_category_id) {
        const data = await this.dropdownlisttable.getwalletDetails(customer_id, country_code, user_category_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('secondComponent-dropdownlist-api'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], DropdownlistfirsttableController.prototype, "getwalletdropdownlistapi", null);
__decorate([
    (0, common_1.Get)('secondComponent-dropdownlist-table-api'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('user_category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], DropdownlistfirsttableController.prototype, "getwalletDetails", null);
DropdownlistfirsttableController = __decorate([
    (0, swagger_1.ApiTags)('Access-other-user-wow-wallet-Drop-Down-List-and-itsTable'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [dropdownlistfirsttable_service_1.DropdownlistfirsttableService])
], DropdownlistfirsttableController);
exports.DropdownlistfirsttableController = DropdownlistfirsttableController;
//# sourceMappingURL=dropdownlistfirsttable.controller.js.map