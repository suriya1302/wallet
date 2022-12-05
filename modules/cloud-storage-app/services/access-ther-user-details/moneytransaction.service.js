"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneytransactionService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
const { DateTime } = require("luxon");
let MoneytransactionService = class MoneytransactionService {
    async postamountdetails(customer_id, country_code, entry_data, dateandmonth, user_id, send_user_id, Time_Zone) {
        try {
            let success_result = [];
            let final_limit_amount;
            let balance;
            let currency;
            let transaction_id;
            let closing_balance;
            let debit_wallet_id;
            let credit_wallet_id;
            let first_name;
            let last_name;
            let buyerfirst_name;
            let buyerlast_name;
            var timeZoneIanaString = Time_Zone;
            var serverLocalDateFormate = DateTime.local({
                zone: timeZoneIanaString,
            }).toFormat("yyyy-MM-dd");
            console.log("local Date", serverLocalDateFormate);
            let present_amount;
            present_amount = entry_data.debit_amount;
            let transaction_failed_result = [];
            const amount = await app_module_1.dbConnection.query(`SELECT debit_entry_amount 
         FROM ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger 
         where DATE_FORMAT(transaction_datetime,'%Y-%m')='${dateandmonth}' and transaction_executed_by_user_id='${user_id}';
             `);
            let total_transaction_amount = 0;
            for (const i of amount) {
                total_transaction_amount = total_transaction_amount + +i.debit_entry_amount;
            }
            console.log('total transamount', total_transaction_amount);
            let a;
            a = total_transaction_amount + present_amount;
            const limit_amount = await app_module_1.dbConnection.query(`SELECT limit_amount FROM ${country_code}_manage_get_wow_education_db.1_getsterapp_max_transfer_limit_from_wow_wallet_to_get_wallet where limit_currency='Rs.';`);
            for (let amount of limit_amount) {
                final_limit_amount = amount.limit_amount;
            }
            let failed_msg = "You have reached the maximum limit of transaction for this month";
            if (a <= final_limit_amount) {
                let success_msg = "Transaction Executed Successfully";
                const sender_id = await app_module_1.dbConnection.query(`
      select user_id_of_wallet  from in_manage_get_wow_education_db.in_123_wow_customer_wow_wallets_ledger
      where transaction_executed_by_user_id=${user_id}
      and is_debit=1 group by user_id_of_wallet;
            `);
                const balance_amount = await app_module_1.dbConnection.query(`
          SELECT wallet_closing_balance_amount
          FROM in_manage_get_wow_education_db.in_123_wow_customer_wow_wallets_ledger 
          where user_id_of_wallet=${sender_id[0].user_id_of_wallet}
          order by transaction_id desc  limit 1
            `);
                for (let balance_Data of balance_amount) {
                    balance = balance_Data.wallet_closing_balance_amount;
                }
                let minus_data;
                minus_data = balance - entry_data.debit_amount;
                console.log("abcdef balance", minus_data);
                const receiver_id = await app_module_1.dbConnection.query(`
        select user_id_of_wallet  from in_manage_get_wow_education_db.in_123_wow_customer_wow_wallets_ledger
        where transaction_executed_by_user_id=${send_user_id}
        and is_debit=1 group by user_id_of_wallet;
              `);
                const last_transaction_details = await app_module_1.dbConnection.query(`select transaction_id,wallet_closing_balance_amount from ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger
           where user_id_of_wallet=${receiver_id[0].user_id_of_wallet}
            order by transaction_id desc limit 1`);
                for (let j of last_transaction_details) {
                    transaction_id = j.transaction_id;
                    closing_balance = j.wallet_closing_balance_amount;
                }
                let final_balance_amount = +entry_data.debit_amount + +closing_balance;
                const walletid = await app_module_1.dbConnection.query(`SELECT user_id_of_wallet FROM ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger where (transaction_executed_by_user_id=${user_id} and is_debit=1)
          order by  user_id_of_wallet desc limit 1;`);
                console.log(walletid);
                for (let k of walletid) {
                    debit_wallet_id = k.user_id_of_wallet;
                }
                let credit;
                credit = "0.00";
                let debit_is_debit;
                debit_is_debit = '1';
                const sender_name = await app_module_1.dbConnection.query(`SELECT first_name,last_name FROM in_123_wow_customer_db.user_profile where user_id=${user_id};`);
                const buyer_name = await app_module_1.dbConnection.query(`SELECT first_name,last_name FROM in_123_wow_customer_db.user_profile where user_id=${send_user_id};`);
                console.log(sender_name);
                console.log(buyer_name);
                for (let s of sender_name) {
                    first_name = s.first_name;
                    last_name = s.last_name;
                }
                console.log(first_name);
                console.log(last_name);
                for (let b of buyer_name) {
                    buyerfirst_name = b.first_name;
                    buyerlast_name = b.last_name;
                }
                console.log(buyerfirst_name);
                console.log(buyerlast_name);
                await app_module_1.dbConnection.query(`insert into ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger 
          
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
          value
          (
            '${serverLocalDateFormate}',
            '${debit_is_debit}',
            'Debited by ${first_name} ${last_name} Credited to ${buyerfirst_name} ${buyerlast_name}',
            
            ${sender_id[0].user_id_of_wallet},
            ${user_id},
            ${entry_data.debit_amount},
            '${entry_data.debit_entry_currency}',
            ${minus_data},
            '${entry_data.wallet_closing_balance_currency}'
            )`);
                const credit_walletid = await app_module_1.dbConnection.query(`SELECT user_id_of_wallet FROM ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger where transaction_executed_by_user_id=${send_user_id}`);
                for (let l of credit_walletid) {
                    credit_wallet_id = l.user_id_of_wallet;
                }
                let debit;
                debit = "0.00";
                let credit_is_debit;
                credit_is_debit = '0';
                await app_module_1.dbConnection.query(`insert into ${country_code}_manage_get_wow_education_db.${country_code}_${customer_id}_wow_customer_wow_wallets_ledger

          (transaction_datetime,
            is_debit,
            transaction_description,
            user_id_of_wallet,
            transaction_executed_by_user_id,
            credit_entry_amount,
            credit_entry_currency,
            wallet_closing_balance_amount,
            wallet_closing_balance_currency) 
          value('${serverLocalDateFormate}',
          ${credit_is_debit},
          'Credited by ${first_name} ${last_name}',
          ${send_user_id},
          ${user_id},
          ${entry_data.debit_amount},
          '${entry_data.credit_entry_currency}',
          ${final_balance_amount},
          '${entry_data.wallet_closing_balance_currency}'
          )`);
                const audit_trail = await app_module_1.dbConnection.query(`insert into ${country_code}_manage_get_wow_education_db.wow_wallet_audit_trail values(${user_id},${debit_is_debit},'Debited by ${first_name} ${last_name} Credited to ${buyerfirst_name} ${buyerlast_name}','${serverLocalDateFormate}');`);
                success_result.push({
                    amount_Transfered_for_present_month: total_transaction_amount,
                    current_transaction_amount: present_amount,
                    success_msg: success_msg,
                });
                return {
                    statusCode: common_1.HttpStatus.OK,
                    message: "Get Data Successfully!",
                    data: success_msg,
                };
            }
            else {
                return {
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                    message: "You have already reached the limit of Transaction for this month",
                };
            }
        }
        catch (error) {
        }
    }
};
MoneytransactionService = __decorate([
    (0, common_1.Injectable)()
], MoneytransactionService);
exports.MoneytransactionService = MoneytransactionService;
//# sourceMappingURL=moneytransaction.service.js.map