"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastTenTranscationService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let LastTenTranscationService = class LastTenTranscationService {
    async transactionDetails(country_id, country_code, login_user_id) {
        try {
            let overall_result = [];
            const database_name1 = `${country_code}_manage_get_wow_education_db`;
            const database_name2 = `${country_code}_${country_id}_wow_customer_db`;
            const wallet_user_id = await app_module_1.dbConnection.query(`
        select user_id_of_wallet  from ${country_code}_manage_get_wow_education_db.${country_code}_${country_id}_wow_customer_wow_wallets_ledger 
        where transaction_executed_by_user_id=${login_user_id}
        and is_debit=1 group by user_id_of_wallet;
            `);
            const user_id = await app_module_1.dbConnection.query(`SELECT is_debit,
        transaction_datetime,
        transaction_id,
        transaction_description,
        transaction_type,
        debit_entry_amount,
        debit_entry_currency,
        wallet_closing_balance_amount,
        wallet_closing_balance_currency,
        credit_entry_amount,
        credit_entry_currency 
        FROM ${country_code}_manage_get_wow_education_db.${country_code}_${country_id}_wow_customer_wow_wallets_ledger a 
        where (is_debit=1 and  user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet} ) 
        or 
        (is_debit=0 and user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}) 
        order by a.transaction_id  desc limit 10;`);
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
                    credit_entry_currency: user_id[i].credit_entry_currency,
                    credit_entry_amount: user_id[i].credit_entry_amount,
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
            const database_name1 = `${country_code}_manage_get_wow_education_db`;
            const database_name2 = `${country_code}_${customer_id}_wow_customer_db`;
            const transaction_details = await app_module_1.dbConnection.query(`
           SELECT date_format(transaction_datetime,'%Y-%m-%d') as transaction_datetime,transaction_type,transaction_id,transaction_description,credit_entry_amount,credit_entry_currency,debit_entry_amount,
           debit_entry_currency,wallet_closing_balance_amount,wallet_closing_balance_currency,is_debit from
           ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger a 
           where  user_id_of_wallet='${login_user_id}' and 
           transaction_datetime between '${date1}' and '${date2}';
         `);
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
                    Debit_entry_currency: transaction_details[i].debit_entry_currency,
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
    async wowwalletDetails(country_id, country_code, login_user_id) {
        try {
            let wallet_id;
            let current_balance;
            let balance_currency;
            const dbname = `${country_code}_manage_get_wow_education_db`;
            const wallet_user_id = await app_module_1.dbConnection.query(`
            select user_id_of_wallet  from ${dbname}.in_123_wow_customer_wow_wallets_ledger 
            where transaction_executed_by_user_id=${login_user_id}
            and is_debit=1 group by user_id_of_wallet;
                  `);
            for (let wallet of wallet_user_id) {
                wallet_id = wallet.user_id_of_wallet;
            }
            const balance = await app_module_1.dbConnection.query(`
            select wallet_closing_balance_amount,wallet_closing_balance_currency  from 
            ${dbname}.${country_code}_${country_id}_wow_customer_wow_wallets_ledger 
            where user_id_of_wallet=${wallet_user_id[0].user_id_of_wallet}
            order by transaction_id desc limit 1;
                  `);
            for (let Balance of balance) {
                current_balance = Balance.wallet_closing_balance_amount;
                balance_currency = Balance.wallet_closing_balance_currency;
            }
            let values = [];
            values.push({
                walletid: wallet_id,
                balance: current_balance,
                currency_code: balance_currency,
            });
            return values[0];
        }
        catch (error) {
            throw error;
        }
    }
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
LastTenTranscationService = __decorate([
    (0, common_1.Injectable)()
], LastTenTranscationService);
exports.LastTenTranscationService = LastTenTranscationService;
//# sourceMappingURL=last_ten_transcation.service.js.map