"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRout_1 = __importDefault(require("./routes/userRout"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const Port = 3000;
app.use(express_1.default.json());
app.use(userRout_1.default);
app.listen(Port, () => {
    console.log("server is running on port " + Port);
});
