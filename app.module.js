"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.AppModule = void 0;
const username_service_1 = require("./modules/cloud-storage-app/services/last_ten_transcation/username.service");
const username_controller_1 = require("./modules/cloud-storage-app/controllers/last_ten_transcation/username.controller");
const wowaudittrail_service_1 = require("./modules/cloud-storage-app/services/audit-trail/wowaudittrail.service");
const wowaudittrail_controller_1 = require("./modules/cloud-storage-app/controllers/audit-trail/wowaudittrail.controller");
const wowwalletmoneytransaction_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/wowwalletmoneytransaction.service");
const wowwalletmoneytransaction_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/wowwalletmoneytransaction.controller");
const moneytransaction_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/moneytransaction.service");
const moneytransaction_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/moneytransaction.controller");
const transferwowandgetwallet_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/transferwowandgetwallet.service");
const transferwowandgetwallet_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/transferwowandgetwallet.controller");
const idandbalance_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/idandbalance.service");
const idandbalance_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/idandbalance.controller");
const mattabledetails_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/mattabledetails.service");
const mattabledetails_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/mattabledetails.controller");
const dropdownlistfirsttable_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/dropdownlistfirsttable.service");
const dropdownlistfirsttable_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/dropdownlistfirsttable.controller");
const firstdropdownlist_service_1 = require("./modules/cloud-storage-app/services/access-ther-user-details/firstdropdownlist.service");
const firstdropdownlist_controller_1 = require("./modules/cloud-storage-app/controllers/access-other-user-details/firstdropdownlist.controller");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const db_config_1 = require("./config/db.config");
const cloud_storage_app_module_1 = require("./modules/cloud-storage-app/cloud-storage-app.module");
const last_ten_transcation_controller_1 = require("./modules/cloud-storage-app/controllers/last_ten_transcation/last_ten_transcation.controller");
const last_ten_transcation_service_1 = require("./modules/cloud-storage-app/services/last_ten_transcation/last_ten_transcation.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
            cloud_storage_app_module_1.CloudStorageAppModule,
        ],
        controllers: [
            username_controller_1.UsernameController,
            wowaudittrail_controller_1.WowaudittrailController,
            wowwalletmoneytransaction_controller_1.WowwalletmoneytransactionController,
            moneytransaction_controller_1.MoneytransactionController,
            transferwowandgetwallet_controller_1.TransferwowandgetwalletController,
            idandbalance_controller_1.IdandbalanceController,
            mattabledetails_controller_1.MattabledetailsController,
            dropdownlistfirsttable_controller_1.DropdownlistfirsttableController,
            firstdropdownlist_controller_1.FirstdropdownlistController,
            last_ten_transcation_controller_1.LastTenTranscationController,
        ],
        providers: [
            username_service_1.UsernameService,
            wowaudittrail_service_1.WowaudittrailService,
            wowwalletmoneytransaction_service_1.WowwalletmoneytransactionService,
            moneytransaction_service_1.MoneytransactionService,
            transferwowandgetwallet_service_1.TransferwowandgetwalletService,
            idandbalance_service_1.IdandbalanceService,
            mattabledetails_service_1.MattabledetailsService,
            dropdownlistfirsttable_service_1.DropdownlistfirsttableService,
            firstdropdownlist_service_1.FirstdropdownlistService,
            last_ten_transcation_service_1.LastTenTranscationService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
exports.dbConnection = new typeorm_1.DataSource((0, db_config_1.default)());
exports.dbConnection
    .initialize()
    .then(() => {
    console.log(`Data Source has been initialized! "${process.env.DB_HOST},${process.env.DB_USERNAME},${process.env.DB_PASSWORD}"`);
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
//# sourceMappingURL=app.module.js.map