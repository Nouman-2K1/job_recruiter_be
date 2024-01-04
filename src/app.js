import "dotenv/config";
import express from "express";
import sequelize from "./db/config.js";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import AllRouter from "./Routers/AllRouter.js";
import cors from "cors";

const app = express();
app.use(express.json());
const port = process.env.PORT;

connectDb();
dbInit()
  .then(() => console.log("DB Synced"))
  .catch(() => console.log("DB not sycned"));

const mySequalizeStore = SequelizeStore(Session.Store);
const mySequalizeStore1 = new mySequalizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: process.env.SESSIONSECRET,
    store: mySequalizeStore1,
    saveUninitialized: true,
    resave: false,
    proxy: false,
  })
);
mySequalizeStore1.sync({});
const corsInstance = new cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
});
app.use(corsInstance);
app.use("/", AllRouter);
app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is listning at http://localhost:${port}`);
  }
});
