"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index = (0, express_1.default)();
const port = process.env.PORT;
index.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
index.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
