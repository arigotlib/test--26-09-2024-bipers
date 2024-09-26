import { Ibeeper } from "../medels/beeperModelToDataBase";
import { beepers } from "../dataBase/beepers";
import e from "express";
import exp from "constants";
import { stat } from "fs";

export function createBeeper(beeper: Ibeeper): Ibeeper {
    beepers.push(beeper)
    return beeper
}

export function getAllBeepers(): Ibeeper[] {return beepers}

export function getBeeperById(id: number): Ibeeper | undefined {
    return beepers.find((beeper) => beeper.id === id)
}

export function getBeepersByStatus(status: string): Ibeeper[] {
    return beepers.filter((beeper) => beeper.status === status)
}

export function updateBeeperStatusById(id: number, status: string):Ibeeper | undefined {
    let beeper = beepers.find((beeper) => beeper.id === id)
    // beeper.status = status
    return beeper
}

export function deleteBeeperById(id: number):string {
    // let beeper = beepers.find((beeper) => beeper.id === id)
    beepers.splice(beepers.findIndex((beeper) => beeper.id === id), 1)
    return "deleted"
}


