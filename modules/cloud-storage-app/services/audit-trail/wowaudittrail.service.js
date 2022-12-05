"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WowaudittrailService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let WowaudittrailService = class WowaudittrailService {
    async AudittrailDetails(country_code, customer_id) {
        {
            try {
                let database_name1 = `${country_code}_manage_get_wow_education_db`;
                let database_name2 = `${country_code}_${customer_id}_wow_customer_db`;
                const audit_details = await app_module_1.dbConnection.query(`
          select entry_type, entry_description, entry_date_time from ${database_name1}.wow_wallet_audit_trail
          `);
                const audit_name = await app_module_1.dbConnection.query(`
          SELECT  first_name,last_name FROM ${database_name2}.user_profile a
          INNER JOIN ${database_name1}.wow_wallet_audit_trail b
          ON a.user_id = b.entry_by_user_id;
          `);
                console.log("audit_name", audit_name[3].first_name);
                let values = [];
                for (let i = 0; i < audit_details.length; i++) {
                    values.push({
                        entry_type: audit_details[i].entry_type,
                        entry_description: audit_details[i].entry_description,
                        entry_date_time: audit_details[i].entry_date_time,
                        first_name: audit_name[i].first_name,
                        last_name: audit_name[i].last_name,
                    });
                }
                return values;
            }
            catch (error) {
                throw error;
            }
        }
    }
};
WowaudittrailService = __decorate([
    (0, common_1.Injectable)()
], WowaudittrailService);
exports.WowaudittrailService = WowaudittrailService;
//# sourceMappingURL=wowaudittrail.service.js.map