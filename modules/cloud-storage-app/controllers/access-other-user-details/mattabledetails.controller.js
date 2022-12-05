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
exports.MattabledetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mattabledetails_service_1 = require("../../services/access-ther-user-details/mattabledetails.service");
let MattabledetailsController = class MattabledetailsController {
    constructor(mattabledetails) {
        this.mattabledetails = mattabledetails;
    }
    async matcarddetails(customer_id, country_code, user_id) {
        const data = await this.mattabledetails.matcardDetails(customer_id, country_code, user_id);
        return {
            statusCode: 200,
            message: 'Get Data Successfully!',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('mat-card-data'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_code')),
    __param(2, (0, common_1.Query)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], MattabledetailsController.prototype, "matcarddetails", null);
MattabledetailsController = __decorate([
    (0, swagger_1.ApiTags)('Access-other-user-wow-wallet'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [mattabledetails_service_1.MattabledetailsService])
], MattabledetailsController);
exports.MattabledetailsController = MattabledetailsController;
//# sourceMappingURL=mattabledetails.controller.js.map