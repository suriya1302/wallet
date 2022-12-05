"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferwowandgetwalletService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let TransferwowandgetwalletService = class TransferwowandgetwalletService {
    async getwalletDetails(customer_id, country_code, user_category_id, user_id) {
        let overall_result = [];
        let details;
        const database_name1 = `${country_code}_${customer_id}_wow_customer_db`;
        try {
            details = await app_module_1.dbConnection.query(`SELECT b.user_id,b.first_name,b.last_name,b.thumbnail_first_login_image_of_the_day_without_bg
             FROM ${database_name1}.2_userapp_registered_users_registered_categories a
             right join ${database_name1}.user_profile b on a.user_id = b.user_id
             where  (a.user_id !=${user_id}  and  a.user_category_id = ${user_category_id}) and
             (b.user_registration_login_approval_status = 1 or b.user_registration_login_approval_status = 3)
                `);
            console.log("details", details);
            let a = [];
            let category_table_length = await app_module_1.dbConnection.query(`
                select * from ${database_name1}.2_userapp_user_category          
                `);
            let result1 = user_category_id;
            let AlldataforStudent = [];
            for (let i = 0; i < category_table_length.length; i++) {
                let result = await app_module_1.dbConnection.query(`
                    SELECT * FROM ${database_name1}.2_userapp_user_category 
                    where user_category_id='${result1}';             
                    `);
                if (result.length > 0) {
                    result1 = result[0].parent_user_category_id;
                    AlldataforStudent.push(result[0].user_category_name);
                }
            }
            a.push(AlldataforStudent.reverse().toString().replace(/,/g, "/"));
            let values = [];
            new Set(a).forEach((item) => {
                values.push(item);
            });
            for (let j = 0; j < details.length; j++) {
                overall_result.push({
                    user_id: details[j].user_id,
                    first_name: details[j].first_name,
                    last_name: details[j].last_name,
                    image: details[j].thumbnail_first_login_image_of_the_day_without_bg,
                    category: values[0],
                });
            }
            return overall_result;
        }
        catch (error) {
            throw error;
        }
    }
};
TransferwowandgetwalletService = __decorate([
    (0, common_1.Injectable)()
], TransferwowandgetwalletService);
exports.TransferwowandgetwalletService = TransferwowandgetwalletService;
//# sourceMappingURL=transferwowandgetwallet.service.js.map