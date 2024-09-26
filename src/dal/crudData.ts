import { Ibeeper } from "../medels/beeperModelToDataBase";
import { beepers } from "../dataBase/beepers";


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

export function updateBeeperById(id: number, beep: Ibeeper): Ibeeper | undefined {
    let beeper = beepers.find((beeper) => beeper.id === id);
    if (beeper) {
        beeper = beep
        return beeper;
    } else {
        return undefined;
    }
}

export function updateBeeperStatusById(id: number, status: string): Ibeeper | undefined {
    let beeper = beepers.find((beeper) => beeper.id === id);
    if (beeper) {
        beeper.status = status;
        return beeper;
    } else {
        return undefined;
    }
}

export function deleteBeeperById(id: number):string {
    beepers.splice(beepers.findIndex((beeper) => beeper.id === id), 1)
    return "deleted"
}


