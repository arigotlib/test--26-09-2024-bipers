"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBeeper = createBeeper;
exports.getAllBeepers = getAllBeepers;
exports.getBeeperById = getBeeperById;
exports.getBeepersByStatus = getBeepersByStatus;
exports.updateBeeperById = updateBeeperById;
exports.updateBeeperStatusById = updateBeeperStatusById;
exports.deleteBeeperById = deleteBeeperById;
const beepers_1 = require("../dataBase/beepers");
function createBeeper(beeper) {
    beepers_1.beepers.push(beeper);
    return beeper;
}
function getAllBeepers() { return beepers_1.beepers; }
function getBeeperById(id) {
    return beepers_1.beepers.find((beeper) => beeper.id === id);
}
function getBeepersByStatus(status) {
    return beepers_1.beepers.filter((beeper) => beeper.status === status);
}
function updateBeeperById(id, beep) {
    let beeper = beepers_1.beepers.find((beeper) => beeper.id === id);
    if (beeper) {
        beeper = beep;
        return beeper;
    }
    else {
        return undefined;
    }
}
function updateBeeperStatusById(id, status) {
    let beeper = beepers_1.beepers.find((beeper) => beeper.id === id);
    if (beeper) {
        beeper.status = status;
        return beeper;
    }
    else {
        return undefined;
    }
}
function deleteBeeperById(id) {
    beepers_1.beepers.splice(beepers_1.beepers.findIndex((beeper) => beeper.id === id), 1);
    return "deleted";
}
