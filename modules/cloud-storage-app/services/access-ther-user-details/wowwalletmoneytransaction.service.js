"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WowwalletmoneytransactionService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
const luxon_1 = require("luxon");
let WowwalletmoneytransactionService = class WowwalletmoneytransactionService {
    async amount_transfer(country_code, customer_id, time_zone, login_id, amount_transfer) {
        try {
            let previous_balance_amount;
            var timeZoneIanaString = time_zone;
            var serverLocalDateFormate = luxon_1.DateTime.local({
                zone: timeZoneIanaString,
            }).toFormat("yyyy-MM-dd");
            console.log("local Date", serverLocalDateFormate);
            let database_name1 = `${country_code}_manage_get_wow_education_db`;
            let database_name2 = ` ${country_code}_${customer_id}_wow_customer_db`;
            let wallet_id;
            console.log(" console.log(user_id);", amount_transfer.transaction_executed_by_user_id);
            const sender_id = await app_module_1.dbConnection.query(`
      select user_id_of_wallet  from ${database_name1}.in_123_wow_customer_wow_wallets_ledger 
      where transaction_executed_by_user_id=${login_id}
      and is_debit=1 group by user_id_of_wallet;
            `);
            for (let wallet of sender_id) {
                wallet_id = wallet.user_id_of_wallet;
            }
            previous_balance_amount = await app_module_1.dbConnection.query(`
      select wallet_closing_balance_amount,wallet_closing_balance_currency  from
      ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
      where user_id_of_wallet=${sender_id[0].user_id_of_wallet}
      order by transaction_id desc limit 1;
      `);
            console.log("previous_balance_amount", previous_balance_amount);
            let old_balance = previous_balance_amount[0].wallet_closing_balance_amount;
            let new_balance = +old_balance - +amount_transfer.debit_entry_amount;
            console.log("old_balance", old_balance);
            console.log("new_balance", new_balance);
            let transaction_id;
            let closing_balance;
            const receiver_id = await app_module_1.dbConnection.query(`
      select user_id_of_wallet  from ${database_name1}.in_123_wow_customer_wow_wallets_ledger
      where transaction_executed_by_user_id=${amount_transfer.receiver_wallet_id}
      and is_debit=1 group by user_id_of_wallet;
            `);
            const last_transaction_details = await app_module_1.dbConnection.query(`
       select transaction_id,wallet_closing_balance_amount from
       ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
        where user_id_of_wallet=${receiver_id[0].user_id_of_wallet}
        order by transaction_id desc limit 1
        `);
            console.log("receiver_id", receiver_id[0].user_id_of_wallet);
            console.log("last_transaction_details", last_transaction_details);
            for (let j of last_transaction_details) {
                transaction_id = j.transaction_id;
                closing_balance = j.wallet_closing_balance_amount;
            }
            let final_balance_amount = +amount_transfer.debit_entry_amount + +closing_balance;
            const sender_name = await app_module_1.dbConnection.query(`
      select first_name,last_name from ${database_name2}.user_profile
      where user_id=${login_id}
      `);
            console.log("final_balance_amount", final_balance_amount);
            let s_f_name = sender_name[0].first_name;
            let s_l_name = sender_name[0].last_name;
            console.log("f_name", s_f_name);
            console.log("l_name", s_l_name);
            const receiver_name = await app_module_1.dbConnection.query(`
      select first_name,last_name from ${database_name2}.user_profile
      where user_id=${amount_transfer.receiver_wallet_id}
      `);
            let r_f_name = receiver_name[0].first_name;
            let r_l_name = receiver_name[0].last_name;
            console.log("f_name", r_f_name);
            console.log("l_name", r_l_name);
            console.log("date_time", amount_transfer.transaction_datetime);
            const insert1 = await app_module_1.dbConnection.query(`insert into
        ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
           (
            transaction_datetime,
            is_debit,
            transaction_description,
            user_id_of_wallet,
            transaction_executed_by_user_id,
            debit_entry_amount,
            debit_entry_currency,
            wallet_closing_balance_amount,
            wallet_closing_balance_currency
            )
             value(
             '${serverLocalDateFormate}',
             1,
             'Debited by ${s_f_name} ${s_l_name} Credited to ${r_f_name} ${r_l_name}',
             ${sender_id[0].user_id_of_wallet},
             ${login_id},
             ${amount_transfer.debit_entry_amount},
             '${amount_transfer.debit_entry_currency}',
             ${new_balance},
             '${amount_transfer.wallet_closing_balance_currency}'
             );`);
            const audit_trail = await app_module_1.dbConnection.query(`insert into ${country_code}_manage_get_wow_education_db.wow_wallet_audit_trail values(${login_id},1,'Debited by ${s_f_name} ${s_l_name} credited to ${r_f_name} ${r_l_name}','${serverLocalDateFormate}');`);
            const insert2 = await app_module_1.dbConnection.query(`insert into
        ${database_name1}.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
        (
          transaction_datetime,
          is_debit,
          transaction_description,
          user_id_of_wallet,
          transaction_executed_by_user_id,
          credit_entry_amount,
          credit_entry_currency,
          wallet_closing_balance_amount,
          wallet_closing_balance_currency
          )
           value(
           '${serverLocalDateFormate}',
           0,
           'Credited to ${r_f_name} ${r_l_name} Debited by ${s_f_name} ${s_l_name}',
           ${receiver_id[0].user_id_of_wallet},
           ${login_id},
           ${amount_transfer.debit_entry_amount},
           '${amount_transfer.credit_entry_currency}',
           ${final_balance_amount},
           '${amount_transfer.wallet_closing_balance_currency}'
           );`);
        }
        catch (error) {
            throw error;
        }
    }
};
WowwalletmoneytransactionService = __decorate([
    (0, common_1.Injectable)()
], WowwalletmoneytransactionService);
exports.WowwalletmoneytransactionService = WowwalletmoneytransactionService;
//# sourceMappingURL=wowwalletmoneytransaction.service.js.map