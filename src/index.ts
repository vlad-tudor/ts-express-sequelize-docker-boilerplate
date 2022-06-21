import { config } from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import db, { DB_PORT, DB_URL } from "./db";

config();

const app: Application = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await db.authenticate();

    res.send(`Express server with TypeScript, DB OK`);
  } catch (error) {
    res.send("Express server with TypeScript, DB ERR");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(DB_PORT, DB_URL, "SHIT");
  console.log(`Server is listening on port ${PORT}`);
});
