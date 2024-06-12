import express, {Express} from 'express';
import dotenv from "dotenv";
dotenv.config();
import authRouter from './routes/auth';
import parameterRouter from './routes/parameter';
import historyRouter from './routes/history';
import userRouter from './routes/user';
import scoreRouter from './routes/score';
import suggestRouter from './routes/suggest';

const app: Express = express();
const port = process.env.PORT;


app.use(express.json());
app.use("/auth", authRouter);
app.use("/parameter", parameterRouter);
app.use("/history", historyRouter);
app.use("/user", userRouter);
app.use("/score", scoreRouter);
app.use("/suggest", suggestRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});