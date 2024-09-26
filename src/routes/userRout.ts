import  express  from "express";
import * as userContraller from "../contrallers/beeperContraller"
const userRouter = express.Router();


userRouter.post('/api/beepers', userContraller.createNewBeeper);
userRouter.get('/api/beepers', userContraller.getAll);
userRouter.get('/api/beepers/:id', userContraller.getBeeperById);
userRouter.get('/api/beepers/status/:status', userContraller.getBeepersByStatus);
userRouter.put('/api/beepers/:id/status', userContraller.updateBeeperStatusById);
userRouter.delete('/api/beepers/:id', userContraller.deleteBeeperById);