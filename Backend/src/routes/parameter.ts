import express from "express";
import { createParameter } from "../controllers/parameter/paramete.controller";

const parameterRouter = express.Router();

parameterRouter.post("/create", createParameter);

export default parameterRouter;