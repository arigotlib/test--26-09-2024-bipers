import { Ibeeper } from "../medels/beeperModel";
import { Status } from "../enums/enum";
export const beepers: Ibeeper[] = [
    {
        id: 1,
        name: "Beepers",
        status: Status.manufactured,
        created_at: new Date(),
        detonated_at: new Date(),
        latitude: 0,
        longitude: 0
    }
]