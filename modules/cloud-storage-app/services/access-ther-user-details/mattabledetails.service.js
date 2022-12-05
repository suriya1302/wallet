"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MattabledetailsService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../../app.module");
let MattabledetailsService = class MattabledetailsService {
    async matcardDetails(customer_id, country_code, user_id) {
        try {
            let cat_id;
            let category_name;
            let data = [];
            let first_name;
            let last_name;
            let image;
            let details = await app_module_1.dbConnection.query(`SELECT first_name,last_name,thumbnail_first_login_image_of_the_day_without_bg FROM ${country_code}_${customer_id}_wow_customer_db.user_profile where user_id=${user_id};`);
            console.log(details);
            for (let profile of details) {
                (first_name = profile.first_name),
                    (last_name = profile.last_name),
                    (image = profile.thumbnail_first_login_image_of_the_day_without_bg);
            }
            let user_cat_id = await app_module_1.dbConnection.query(`SELECT user_category_id FROM ${country_code}_${customer_id}_wow_customer_db.2_userapp_registered_users_registered_categories where user_id=${user_id};`);
            for (let id of user_cat_id) {
                cat_id = id.user_category_id;
                console.log(cat_id);
            }
            let a = [];
            let category;
            let category_table_length = await app_module_1.dbConnection.query(`
                  select * from ${country_code}_${customer_id}_wow_customer_db.2_userapp_user_category
                  `);
            for (let i = 0; i < user_cat_id.length; i++) {
                console.log(cat_id[i].user_category_id);
                let result1 = user_cat_id[i].user_category_id;
                let AlldataforStudent = [];
                let ids = [];
                for (let i = 0; i < category_table_length.length; i++) {
                    let result = await app_module_1.dbConnection.query(`
                                SELECT * FROM ${country_code}_${customer_id}_wow_customer_db.2_userapp_user_category
                                where user_category_id='${result1}';
                                `);
                    if (result.length > 0) {
                        result1 = result[0].parent_user_category_id;
                        AlldataforStudent.push(result[0].user_category_name);
                        ids.push(result[0].user_category_id);
                    }
                }
                a.push(AlldataforStudent.reverse().toString().replace(/,/g, "/"));
                for (let i = 0; i < user_cat_id.length; i++) {
                    category = a[i];
                }
            }
            data.push({
                first_name: first_name,
                last_name: last_name,
                image: image,
                category_name: category,
            });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
};
MattabledetailsService = __decorate([
    (0, common_1.Injectable)()
], MattabledetailsService);
exports.MattabledetailsService = MattabledetailsService;
//# sourceMappingURL=mattabledetails.service.js.map