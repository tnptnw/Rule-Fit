import express from 'express';
import { getHistory } from '../controllers/history/historyController';

const historyRouter = express.Router();

historyRouter.get('/getHistory', getHistory);

export default historyRouter;