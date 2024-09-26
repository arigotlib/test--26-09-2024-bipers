import userRouter from "./routes/userRout";
import express from "express";
const app = express();
const Port = 3000;
app.use(express.json());
app.use(userRouter);
app.listen(Port, () => {
    console.log("server is running on port " + Port);
});
