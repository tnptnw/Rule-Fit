import express from "express";
import { getScore } from "../controllers/score/score.controller";

const scoreRouter = express.Router();

scoreRouter.get("/getScore", getScore);

export default scoreRouter;
