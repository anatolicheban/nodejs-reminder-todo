"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./middleware/logger");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = require("./config/corsOptions");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
//Middleware
app.use(logger_1.logger);
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions_1.corsOptions));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
