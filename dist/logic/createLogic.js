"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createId = createId;
exports.createName = createName;
const names_1 = require("../dataBase/names");
let i = 1;
function createId() {
    let id = i;
    i++;
    return id;
}
function createName() {
    let name = names_1.names[Math.floor(Math.random() * names_1.names.length)];
    return name;
}
