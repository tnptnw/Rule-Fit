import express from 'express';
import { getHistory } from '../controllers/history/historyController';

const historyRouter = express.Router();

historyRouter.post('/getHistory', getHistory);

export default historyRouter;