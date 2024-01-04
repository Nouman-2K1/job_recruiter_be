import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
const AllRouter = Router();

AllRouter.use("/auth", AuthRouter);

export default AllRouter;
