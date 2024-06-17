import express from "express";
import { getSuggest } from "../controllers/suggest/suggest.controller";

const suggestRouter = express.Router();

suggestRouter.get("/getSuggest", getSuggest);

export default suggestRouter;
