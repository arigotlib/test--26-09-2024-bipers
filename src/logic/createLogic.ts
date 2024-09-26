import {Estatus} from "../enums/enum"
import { Ibeeper } from "../medels/beeperModelToDataBase"
import { names } from "../dataBase/names"

let i:any = 1
export function createId(): Number {
    let id:Number = i
    i++
    return id
}

export function createName(): string {
    let name:string = names[Math.floor(Math.random() * names.length)]
    return name
}



    