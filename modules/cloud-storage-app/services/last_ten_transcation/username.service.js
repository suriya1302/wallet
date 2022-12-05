"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let UsernameService = class UsernameService {
    async username(country_id, country_code, login_user_id) {
        let arr = [];
        const a = await app_module_1.dbConnection.query(`SELECT first_name,last_name FROM ${country_code}_${country_id}_wow_customer_db.user_profile where user_id=${login_user_id};`);
        arr.push({
            first_name: a[0].first_name,
            last_name: a[0].last_name
        });
        return arr;
    }
};
UsernameService = __decorate([
    (0, common_1.Injectable)()
], UsernameService);
exports.UsernameService = UsernameService;
//# sourceMappingURL=username.service.js.map