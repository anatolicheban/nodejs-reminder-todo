import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {logger} from "./middleware/logger";
import cookieParser from "cookie-parser";
import cors from 'cors'
import {corsOptions} from "./config/corsOptions";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

//Middleware
app.use(logger)
app.use(cookieParser())
app.use(cors(corsOptions))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

