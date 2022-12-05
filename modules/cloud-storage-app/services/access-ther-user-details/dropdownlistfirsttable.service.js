"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownlistfirsttableService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let DropdownlistfirsttableService = class DropdownlistfirsttableService {
    async getwalletdropdownlistapi(country_code, customer_id) {
        const database_name1 = `${country_code}_${customer_id}_wow_customer_db`;
        try {
            let a = [];
            const category_id = await app_module_1.dbConnection.query(`
       select user_category_id
      from ${database_name1}.2_userapp_user_category where user_category_id
      not in (select parent_user_category_id from
      ${country_code}_${customer_id}_wow_customer_db.2_userapp_user_category where user_category_id!=parent_user_category_id)`);
            let category_table_length = await app_module_1.dbConnection.query(`
                select * from ${database_name1}.2_userapp_user_category
                `);
            for (let i = 0; i < category_id.length; i++) {
                console.log(category_id[i].user_category_id);
                let result1 = category_id[i].user_category_id;
                let AlldataforStudent = [];
                let ids = [];
                for (let i = 0; i < category_table_length.length; i++) {
                    let result = await app_module_1.dbConnection.query(`
                              SELECT * FROM ${database_name1}.2_userapp_user_category
                              where user_category_id='${result1}';
                              `);
                    if (result.length > 0) {
                        result1 = result[0].parent_user_category_id;
                        AlldataforStudent.push(result[0].user_category_name);
                        ids.push(result[0].user_category_id);
                    }
                }
                a.push(AlldataforStudent.reverse().toString().replace(/,/g, "/"));
            }
            console.log(a);
            let result = [];
            for (let i = 0; i < category_id.length; i++) {
                result.push({
                    user_category_name: a[i],
                    user_category_id: category_id[i].user_category_id,
                });
            }
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getwalletDetails(customer_id, country_code, user_category_id) {
        let overall_result = [];
        let id;
        let uid = [];
        let user_wallet_balance;
        let ubalance = [];
        try {
            const details = await app_module_1.dbConnection.query(`
        SELECT b.user_id,b.first_name,b.last_name,b.thumbnail_first_login_image_of_the_day_without_bg
        FROM ${country_code}_${customer_id}_wow_customer_db.2_userapp_registered_users_registered_categories a
        inner join ${country_code}_${customer_id}_wow_customer_db.user_profile b on a.user_id = b.user_id
        inner join ${country_code}_manage_get_wow_education_db.in_123_wow_customer_wow_wallets_ledger c 
        on  c.user_id_of_wallet=a.user_id
        where a.user_category_id = ${user_category_id} and (b.user_registration_login_approval_status = 1 or b.user_registration_login_approval_status = 3)
        and c.is_debit=1 group by b.user_id
        `);
            console.log(details);
            console.log("user_id", details.user_id);
            let data;
            for (let i = 0; i < details.length; i++) {
                id = details[i].user_id;
                console.log("user_id", id);
                data = await app_module_1.dbConnection.query(`SELECT user_id_of_wallet FROM ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger where transaction_executed_by_user_id =${id} and is_debit=1;`);
                console.log("wallet id", data);
                const user_wallet_id = data[0].user_id_of_wallet;
                uid.push(user_wallet_id);
                console.log("uid", uid);
                const second_field = await app_module_1.dbConnection.query(`SELECT wallet_closing_balance_amount FROM ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger where user_id_of_wallet=${id} order by transaction_id desc  limit 1;
            `);
                console.log("balance", second_field);
                user_wallet_balance = second_field[0].wallet_closing_balance_amount;
                ubalance.push({ user_wallet_balance });
            }
            let a = [];
            let category_table_length = await app_module_1.dbConnection.query(`
                select * from ${country_code}_${customer_id}_wow_customer_db.2_userapp_user_category          
                `);
            let result1 = user_category_id;
            let AlldataforStudent = [];
            for (let i = 0; i < category_table_length.length; i++) {
                let result = await app_module_1.dbConnection.query(`
                    SELECT * FROM ${country_code}_${customer_id}_wow_customer_db.2_userapp_user_category 
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
            for (let i = 0; i < details.length; i++) {
                overall_result.push({
                    user_id: details[i].user_id,
                    first_name: details[i].first_name,
                    last_name: details[i].last_name,
                    image: details[i].thumbnail_first_login_image_of_the_day_without_bg,
                    category: values[0],
                    user_wallet_id: uid[i],
                    balance: ubalance[i].user_wallet_balance,
                });
            }
            return overall_result;
        }
        catch (error) {
            throw error;
        }
    }
};
DropdownlistfirsttableService = __decorate([
    (0, common_1.Injectable)()
], DropdownlistfirsttableService);
exports.DropdownlistfirsttableService = DropdownlistfirsttableService;
//# sourceMappingURL=dropdownlistfirsttable.service.js.map