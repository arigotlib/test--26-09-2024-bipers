"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = updateStatus;
const enum_1 = require("../enums/enum");
function updateStatus(beeper, latitude, longitude) {
    let status = beeper.status;
    switch (status) {
        case enum_1.Estatus.manufactured:
            beeper.status = enum_1.Estatus.assembled;
            return beeper;
        case enum_1.Estatus.assembled:
            beeper.status = enum_1.Estatus.shipped;
            return beeper;
        case enum_1.Estatus.shipped:
            beeper.status = enum_1.Estatus.deployed;
            beeper.detonated_at = new Date();
            beeper.latitude = latitude;
            beeper.longitude = longitude;
            return beeper;
        case enum_1.Estatus.detonated:
            return "already deployed";
    }
}
