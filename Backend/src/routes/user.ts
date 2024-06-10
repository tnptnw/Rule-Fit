import express from "express";
import { updateUsername, getUsername } from "../controllers/user/user.controller";
const userRouter = express.Router();

userRouter.post("/updateUsername", updateUsername);
userRouter.get("/getUsername", getUsername);

export default userRouter;
