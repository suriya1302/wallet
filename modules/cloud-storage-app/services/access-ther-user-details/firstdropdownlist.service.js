"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstdropdownlistService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let FirstdropdownlistService = class FirstdropdownlistService {
    async transactionDetails(country_id, country_code, login_user_id) {
        try {
            let overall_result = [];
            const database_name1 = `${country_code}_manage_get_wow_education_db`;
            const database_name2 = `${country_code}_${country_id}_wow_customer_db`;
            const user_id = await app_module_1.dbConnection.query(`SELECT is_debit,transaction_datetime,transaction_id,transaction_description,transaction_type,debit_entry_amount,debit_entry_currency,wallet_closing_balance_amount,wallet_closing_balance_currency,credit_entry_amount,credit_entry_currency FROM ${country_code}_manage_get_wow_education_db.${country_code}_${country_id}_wow_customer_wow_wallets_ledger where user_id_of_wallet=${login_user_id} order by transaction_id desc limit 10;`);
            const wallet_user_id = await app_module_1.dbConnection.query(`
        select user_id_of_wallet  from ${country_code}_manage_get_wow_education_db.${country_code}_${country_id}_wow_customer_wow_wallets_ledger 
        where transaction_executed_by_user_id=${login_user_id}
        and is_debit=1 group by user_id_of_wallet;
            `);
            let names;
            names = await app_module_1.dbConnection.query(`
      SELECT first_name,last_name
      FROM ${database_name2}.user_profile a
      INNER JOIN  ${database_name1}.${country_code}_${country_id}_wow_customer_wow_wallets_ledger b
      ON a.user_id = b.transaction_executed_by_user_id where
       (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet} and is_debit=0)
      or 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet} and is_debit=1) 
      order by transaction_id desc;
      `);
            console.log(names);
            const transaction_executed_by_user_ids = await app_module_1.dbConnection.query(`
      select transaction_executed_by_user_id  , transaction_datetime from 
      ${database_name1}.${country_code}_${country_id}_wow_customer_wow_wallets_ledger
      where 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}  and is_debit=0 ) 
      or 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}  and is_debit=1) 
      order by transaction_id desc limit 10; 
      `);
            let user_category_ids;
            let a = [];
            let ids = [];
            for (let i = 0; i < transaction_executed_by_user_ids.length; i++) {
                user_category_ids = await app_module_1.dbConnection.query(`
        select  user_category_id from ${database_name2}.2_userapp_registered_users_registered_categories
        where user_id=${transaction_executed_by_user_ids[i].transaction_executed_by_user_id};
      
        `);
                console.log(user_category_ids[0].user_category_id);
                let category_table_length = await app_module_1.dbConnection.query(`
            select * from ${database_name2}.2_userapp_user_category          
            `);
                let result1 = user_category_ids[0].user_category_id;
                let AlldataforStudent = [];
                for (let i = 0; i < category_table_length.length; i++) {
                    let result = await app_module_1.dbConnection.query(`
                SELECT * FROM ${database_name2}.2_userapp_user_category 
                where user_category_id='${result1}';             
                `);
                    if (result.length > 0) {
                        result1 = result[0].parent_user_category_id;
                        AlldataforStudent.push(result[0].user_category_name);
                        ids.push(result[0].user_category_id);
                    }
                }
                a.push(AlldataforStudent.reverse().toString().replace(/,/g, "/"));
                console.log("a", a);
            }
            for (let i = 0; i < user_id.length; i++) {
                overall_result.push({
                    transaction_id: user_id[i].transaction_id,
                    transaction_datetime: user_id[i].transaction_datetime,
                    transaction_type: user_id[i].transaction_type,
                    description: user_id[i].transaction_description,
                    debit_entry_amount: user_id[i].debit_entry_amount,
                    debit_entry_currency: user_id[i].debit_entry_currency,
                    Account_balance: user_id[i].wallet_closing_balance_amount,
                    Account_balance_currency_code: user_id[i].wallet_closing_balance_currency,
                    firstname: names[i].first_name,
                    lastname: names[i].last_name,
                    user_category_name: a[i],
                    is_debit: user_id[i].is_debit,
                    credit_entry_amount: user_id[i].credit_entry_amount,
                    credit_entry_currency: user_id[i].credit_entry_currency,
                });
            }
            return overall_result;
        }
        catch (error) {
            throw error;
        }
    }
    async table2(country_code, customer_id, login_user_id, date1, date2) {
        try {
            let f_name;
            let l_name;
            let Category_Name;
            const database_name1 = `${country_code}_manage_get_wow_education_db`;
            const database_name2 = `${country_code}_${customer_id}_wow_customer_db`;
            const transaction_details = await app_module_1.dbConnection.query(`
           SELECT date_format(transaction_datetime,'%Y-%m-%d') as transaction_datetime,transaction_type,transaction_id,transaction_description,debit_entry_amount,
           debit_entry_currency,wallet_closing_balance_amount,wallet_closing_balance_currency,is_debit,credit_entry_amount,credit_entry_currency from
           ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger a 
           where  user_id_of_wallet='${login_user_id}' and 
           transaction_datetime between '${date1}' and '${date2}';
         `);
            console.log(transaction_details);
            const wallet_user_id = await app_module_1.dbConnection.query(`
        select user_id_of_wallet  from ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger 
        where transaction_executed_by_user_id=${login_user_id}
        and is_debit=1 group by user_id_of_wallet;
            `);
            const names = await app_module_1.dbConnection.query(`
      SELECT first_name,last_name
      FROM ${database_name2}.user_profile a
      INNER JOIN  ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger  b
      ON a.user_id = b.transaction_executed_by_user_id where
      (
       (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet} and is_debit=0)
      or 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet} and is_debit=1) 
      )
      and
       date(transaction_datetime) between '${date1}'  and '${date2}';
      `);
            const transaction_executed_by_user_ids = await app_module_1.dbConnection.query(`
      select transaction_executed_by_user_id  , transaction_datetime from 
      ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
      where 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}  and is_debit=0 ) 
      or 
      (user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}  and is_debit=1) 
      and
      date(transaction_datetime) between '${date1}'  and '${date2}'; 
      `);
            let user_category_ids;
            let a = [];
            let ids = [];
            for (let i = 0; i < transaction_executed_by_user_ids.length; i++) {
                user_category_ids = await app_module_1.dbConnection.query(`
        select  user_category_id from ${database_name2}.2_userapp_registered_users_registered_categories
        where user_id=${transaction_executed_by_user_ids[i].transaction_executed_by_user_id};

        `);
                console.log(user_category_ids[0].user_category_id);
                let category_table_length = await app_module_1.dbConnection.query(`
            select * from ${database_name2}.2_userapp_user_category          
            `);
                let result1 = user_category_ids[0].user_category_id;
                let AlldataforStudent = [];
                for (let i = 0; i < category_table_length.length; i++) {
                    let result = await app_module_1.dbConnection.query(`
                SELECT * FROM ${database_name2}.2_userapp_user_category 
                where user_category_id='${result1}';             
                `);
                    if (result.length > 0) {
                        result1 = result[0].parent_user_category_id;
                        AlldataforStudent.push(result[0].user_category_name);
                        ids.push(result[0].user_category_id);
                    }
                }
                a.push(AlldataforStudent.reverse().toString().replace(/,/g, "/"));
                console.log("a", a);
            }
            let i;
            let values = [];
            for (i = 0; i < transaction_details.length; i++) {
                values.push({
                    Date_time: transaction_details[i].transaction_datetime,
                    Transaction_type: transaction_details[i].transaction_type,
                    Transaction_id: transaction_details[i].transaction_id,
                    Transaction_descrption: transaction_details[i].transaction_description,
                    debit_entry_amount: transaction_details[i].debit_entry_amount,
                    debit_entry_currency: transaction_details[i].debit_entry_currency,
                    Balance_amount: transaction_details[i].wallet_closing_balance_amount,
                    wallet_closing_balance_currency: transaction_details[i].wallet_closing_balance_currency,
                    First_name: names[i].first_name,
                    Last_name: names[i].last_name,
                    User_category_name: a[i],
                    is_debit: transaction_details[i].is_debit,
                    credit_entry_amount: transaction_details[i].credit_entry_amount,
                    credit_entry_currency: transaction_details[i].credit_entry_currency,
                });
            }
            console.log(values);
            return values;
        }
        catch (error) {
            throw error;
        }
    }
};
FirstdropdownlistService = __decorate([
    (0, common_1.Injectable)()
], FirstdropdownlistService);
exports.FirstdropdownlistService = FirstdropdownlistService;
//# sourceMappingURL=firstdropdownlist.service.js.map