import {CorsOptions} from "cors";
import {whiteList} from "./whiteList";

export const corsOptions: CorsOptions = {
  credentials: true,
  origin: whiteList,
  optionsSuccessStatus: 200
}