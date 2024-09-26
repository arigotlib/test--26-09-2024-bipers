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
        if (req.body.lat > 32.0 && req.body.lat < 36.0) {
            lat = req.body.lat;
            lon = req.body.lon;
        }
        else {
            return "lat must be between 32 and 36";
        }
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
const coordinates = {
// new Coordinate(35.78674, 34.59708),
// new Coordinate(36.59793, 33.72141),
// new Coordinate(35.85089, 33.5089),
// new Coordinate(36.11096, 33.6838),
// new Coordinate(35.20427, 33.68535),
// new Coordinate(36.55406, 34.0771),
// new Coordinate(35.43539, 33.7846),
// new Coordinate(36.39218, 34.50491),
// new Coordinate(36.58335, 34.6793),
// new Coordinate(35.9977, 33.25026),
// new Coordinate(35.08479, 34.36202),
// new Coordinate(35.13643, 33.42607),
// new Coordinate(36.32015, 34.48697),
// new Coordinate(36.13825, 33.35128),
// new Coordinate(36.13545, 34.65033),
// new Coordinate(35.35375, 34.67662),
// new Coordinate(35.13752, 33.35875),
// new Coordinate(35.91729, 33.12274),
// new Coordinate(36.42971, 33.79351),
// new Coordinate(36.31603, 33.92002),
// new Coordinate(35.75151, 33.83706),
// new Coordinate(35.39202, 34.53059),
// new Coordinate(36.28982, 34.18524),
// new Coordinate(36.34516, 33.92894),
// new Coordinate(36.07131, 34.57897),
// new Coordinate(35.42969, 33.8968),
// new Coordinate(35.09238, 34.28723),
// new Coordinate(35.36946, 33.9799),
// new Coordinate(35.45531, 33.68114),
// new Coordinate(35.82878, 34.53243),
// new Coordinate(35.95813, 34.07938),
// new Coordinate(35.1033, 34.59343),
// new Coordinate(35.176, 33.83205),
// new Coordinate(35.49997, 34.42701),
// new Coordinate(36.58622, 34.63897),
// new Coordinate(35.76916, 34.41031),
// new Coordinate(35.65177, 34.39869),
// new Coordinate(35.36257, 33.01048),
// new Coordinate(36.38592, 33.75823),
// new Coordinate(36.3063, 33.77224),
// new Coordinate(35.19468, 34.3657),
// new Coordinate(36.57411, 34.52543),
// new Coordinate(35.37663, 33.34957),
// new Coordinate(35.04438, 34.27838),
// new Coordinate(35.87574, 33.77564),
// new Coordinate(36.29989, 33.67021),
// new Coordinate(35.27868, 34.63734),
// new Coordinate(35.7885, 34.31768),
// new Coordinate(36.46484, 33.62269),
// new Coordinate(35.38508, 34.34499)
};
