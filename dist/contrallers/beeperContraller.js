"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewBeeper = createNewBeeper;
exports.getAll = getAll;
exports.getBeeperById = getBeeperById;
exports.getBeepersByStatus = getBeepersByStatus;
exports.updateBeeperStatusById = updateBeeperStatusById;
exports.deleteBeeperById = deleteBeeperById;
const createLogic = __importStar(require("../logic/createLogic"));
const updateLogic = __importStar(require("../logic/updateStatusLogic"));
const crudData = __importStar(require("../dal/crudData"));
const enum_1 = require("../enums/enum");
function createNewBeeper(req, res) {
    const newBeeper = {
        id: createLogic.createId(),
        name: createLogic.createName(),
        status: enum_1.Estatus.manufactured,
        created_at: new Date(),
        latitude: 0.0,
        longitude: 0.0
    };
    crudData.createBeeper(newBeeper);
    res.send(newBeeper);
}
function getAll(req, res) {
    const beepers = crudData.getAllBeepers();
    res.send(beepers);
}
function getBeeperById(req, res) {
    const id = Number(req.params.id);
    const beeper = crudData.getBeeperById(id);
    res.send(beeper);
}
function getBeepersByStatus(req, res) {
    const status = req.params.status;
    const beepers = crudData.getBeepersByStatus(status);
    res.send(beepers);
}
function updateBeeperStatusById(req, res) {
    const id = Number(req.params.id);
    let lat;
    let lon;
    if (req.body.lat && req.body.lon != null) {
        lat = req.body.lat;
        lon = req.body.lon;
    }
    else {
        lat = 0.0;
        lon = 0.0;
    }
    const beeper = crudData.getBeeperById(id);
    if (!beeper) {
        res.status(404).send('Beeper not found');
        return;
    }
    const newBeeper = updateLogic.updateStatus(beeper, lat, lon);
    if (newBeeper === undefined) {
        // handle the case where newBeeper is undefined
        res.status(500).send('Error updating beeper');
        return;
    }
    else if (newBeeper === 'already deployed') {
        res.send(newBeeper);
        return;
    }
    else {
        crudData.updateBeeperById(id, newBeeper);
        res.send(newBeeper);
    }
}
function deleteBeeperById(req, res) {
    const id = Number(req.params.id);
    crudData.deleteBeeperById(id);
    res.send("deleted");
}
