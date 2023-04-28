import {Request, Response, NextFunction} from "express";
import {format} from 'date-fns'
import {v4 as uuid} from "uuid";
import * as fs from "fs";
import path from "path";

async function logEvents(message: string, fileName: string) {
  const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fs.promises.mkdir(path.join(__dirname, '..', 'logs'))
    }
    await fs.promises.appendFile(path.join(__dirname, '..', 'logs', fileName), logItem)
  } catch (err) {
    console.log(err);
  }
}

export function logger(req: Request, res: Response, next: NextFunction): void {
  // logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
  console.log(`${req.method} ${req.path}`)
  next()
}