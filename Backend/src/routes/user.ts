import express from "express";
import {
  updateUsername,
  getUsername,
  updateImage,
} from "../controllers/user/user.controller";
import { upload } from "../services/upload/upload";
const userRouter = express.Router();

userRouter.post("/updateUsername", updateUsername);
userRouter.post("/getUsername", getUsername);
userRouter.post("/updateImage/:token", upload.single("file"), updateImage);

export default userRouter;
