"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdandbalanceService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let IdandbalanceService = class IdandbalanceService {
    async wowwalletDetails(country_id, country_code, login_user_id) {
        try {
            let wallet_id;
            let current_balance;
            let balance_currency;
            const dbname = `${country_code}_manage_get_wow_education_db`;
            const wallet_user_id = await app_module_1.dbConnection.query(`
          select user_id_of_wallet  from ${dbname}.${country_code}_${country_id}_wow_customer_wow_wallets_ledger 
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
};
IdandbalanceService = __decorate([
    (0, common_1.Injectable)()
], IdandbalanceService);
exports.IdandbalanceService = IdandbalanceService;
//# sourceMappingURL=idandbalance.service.js.map