import { Ibeeper } from "../medels/beeperModelToDataBase";
import { Estatus } from "../enums/enum";
export const beepers: Ibeeper[] = [
    {
        id: 999999990,
        name: "Beepers",
        status: Estatus.manufactured,
        created_at: new Date(),
        detonated_at: new Date(),
        latitude: 0.0,
        longitude: 0.0
    },
    {
        id: 999999991,
        name: "Beepers",
        status: Estatus.manufactured,
        created_at: new Date(),
        detonated_at: new Date(),
        latitude: 0.0,
        longitude: 0.0
    }

    
]