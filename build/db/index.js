"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDatabase = void 0;
const sequelize_1 = require("sequelize");
// pull these from an .env file
const db = new sequelize_1.Sequelize("postgis-db", "postgis", "postgispassword", {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    define: {
        freezeTableName: true,
        timestamps: true, // createdAt, updatedAt
    },
});
const syncDatabase = () => db.sync({ force: true });
exports.syncDatabase = syncDatabase;
exports.default = db;
