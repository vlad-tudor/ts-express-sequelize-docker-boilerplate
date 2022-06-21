"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    try {
        db_1.default.authenticate();
        res.send(`Express server with TypeScript, DB OK`);
    }
    catch (error) {
        res.send("Express server with TypeScript, DB ERR");
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
