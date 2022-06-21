"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.createUser = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
const User = __1.default.define("User", {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        //allowNull: false,
    },
});
const createUser = (newUser) => User.create(newUser);
exports.createUser = createUser;
const getAllUsers = () => User.findAll().then((usrs) => console.log(usrs));
exports.getAllUsers = getAllUsers;
exports.default = User;
