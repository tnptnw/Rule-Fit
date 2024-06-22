import express from "express";
import { updateUsername, getUsername, updateImage } from "../controllers/user/user.controller";
const userRouter = express.Router();

userRouter.post("/updateUsername", updateUsername);
userRouter.post("/getUsername", getUsername);
userRouter.post("/updateImage", updateImage);

export default userRouter;
