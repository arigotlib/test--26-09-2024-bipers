import { Ibeeper } from "../medels/beeperModelToDataBase";
import { status } from "../enums/enum";
export const beepers: Ibeeper[] = [
    {
        id: 1,
        name: "Beepers",
        status: status.manufactured,
        created_at: new Date(),
        detonated_at: new Date(),
        latitude: 35.78674,
        longitude: 34.59708
    },
    {
        id: 2,
        name: "Beepers",
        status: status.manufactured,
        created_at: new Date(),
        detonated_at: new Date(),
        latitude: 33.72141,
        longitude: 36.59793
    }

    
]