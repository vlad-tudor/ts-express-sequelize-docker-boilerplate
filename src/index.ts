import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import db from "./db";

config();

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    db.authenticate();

    res.send(`Express server with TypeScript, DB OK`);
  } catch (error) {
    res.send("Express server with TypeScript, DB ERR");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
