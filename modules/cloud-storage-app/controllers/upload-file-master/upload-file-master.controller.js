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
exports.UploadFileMasterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../../../auth/guard/jwt-auth.guard");
const uplaod_file_master_service_1 = require("../../services/uplaod-file-master/uplaod-file-master.service");
let UploadFileMasterController = class UploadFileMasterController {
    constructor(_uploadFileMasterService) {
        this._uploadFileMasterService = _uploadFileMasterService;
    }
    async onUploadFileMaster() {
        try {
            return 'Get data successful';
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadFileMasterController.prototype, "onUploadFileMaster", null);
UploadFileMasterController = __decorate([
    (0, common_1.Controller)('upload-file-master'),
    __metadata("design:paramtypes", [uplaod_file_master_service_1.UploadFileMasterService])
], UploadFileMasterController);
exports.UploadFileMasterController = UploadFileMasterController;
//# sourceMappingURL=upload-file-master.controller.js.map