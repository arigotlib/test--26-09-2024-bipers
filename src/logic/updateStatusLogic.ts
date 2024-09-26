import { Estatus } from "../enums/enum";
import { Ibeeper } from "../medels/beeperModelToDataBase";

export function updateStatus(beeper: Ibeeper, latitude:number, longitude:number): Ibeeper | undefined |string {
    let status = beeper.status 
    switch (status) {
        case Estatus.manufactured:
           beeper.status = Estatus.assembled;
           return beeper;
        case Estatus.assembled:
            beeper.status = Estatus.shipped;
            return beeper;
        case Estatus.shipped:
            beeper.status = Estatus.deployed;
            beeper.detonated_at = new Date();
            beeper.latitude = latitude;
            beeper.longitude = longitude;
            return beeper;
        case Estatus.detonated:
            return "already deployed";}
}