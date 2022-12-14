"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});
//# sourceMappingURL=db.config.js.map