import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminAuthRouter from "./AdminAuthRouter/AdminAuthRouter.js";
import JobRouter from "./JobRouter/JobRouter.js";
const AllRouter = Router();

AllRouter.use("/auth/user", AuthRouter);
AllRouter.use("/auth/admin", AdminAuthRouter);
AllRouter.use("/", JobRouter);

export default AllRouter;
