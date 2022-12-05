"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorageAppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../../auth/auth.module");
const upload_file_master_controller_1 = require("./controllers/upload-file-master/upload-file-master.controller");
const user_login_controller_1 = require("./controllers/user-login/user-login.controller");
const query_procedures_module_1 = require("./query-procedures/query-procedures.module");
const uplaod_file_master_service_1 = require("./services/uplaod-file-master/uplaod-file-master.service");
const user_login_service_1 = require("./services/user-login/user-login.service");
let CloudStorageAppModule = class CloudStorageAppModule {
};
CloudStorageAppModule = __decorate([
    (0, common_1.Module)({
        imports: [query_procedures_module_1.QueryProceduresModule, auth_module_1.AuthModule],
        controllers: [upload_file_master_controller_1.UploadFileMasterController, user_login_controller_1.UserLoginController],
        providers: [uplaod_file_master_service_1.UploadFileMasterService, user_login_service_1.UserLoginService],
    })
], CloudStorageAppModule);
exports.CloudStorageAppModule = CloudStorageAppModule;
//# sourceMappingURL=cloud-storage-app.module.js.map