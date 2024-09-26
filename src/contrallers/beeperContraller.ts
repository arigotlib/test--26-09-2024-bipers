import * as createLogic from "../logic/createLogic"
import * as updateLogic from "../logic/updateStatusLogic"
import * as crudData from "../dal/crudData"
import { Ibeeper } from "../medels/beeperModelToDataBase"
import { Estatus } from "../enums/enum"
import e, { Request } from "express"
import { Response } from "express"


export function createNewBeeper(req: Request, res: Response) {

    const newBeeper: Ibeeper = {
        id: createLogic.createId(),
        name: createLogic.createName(),
        status: Estatus.manufactured,
        created_at: new Date(),
        latitude: 0.0,
        longitude: 0.0
        
    }

    crudData.createBeeper(newBeeper)
    
    res.send(newBeeper)
}

export function getAll(req: Request, res: Response) {

    const beepers = crudData.getAllBeepers()
    res.send(beepers)
}

export function getBeeperById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const beeper = crudData.getBeeperById(id)
    res.send(beeper)
}

export function getBeepersByStatus(req: Request, res: Response) {
    const status = req.params.status
    const beepers = crudData.getBeepersByStatus(status)
    res.send(beepers)
}

export function updateBeeperStatusById(req: Request, res: Response) {
const id = Number(req.params.id)
let lat: number;
let lon: number;

if (req.body.lat && req.body.lon != null) {
    lat = req.body.lat
    lon = req.body.lon
} else {
    lat = 0.0
    lon = 0.0
}
const beeper = crudData.getBeeperById(id)
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
    crudData.updateBeeperById(id, newBeeper as Ibeeper);
    res.send(newBeeper);
  }
}

export function deleteBeeperById(req: Request, res: Response) {
    const id = Number(req.params.id)
    crudData.deleteBeeperById(id)
    res.send("deleted")
}

