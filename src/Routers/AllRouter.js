import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminAuthRouter from "./AdminAuthRouter/AdminAuthRouter.js";
const AllRouter = Router();

AllRouter.use("/auth/user", AuthRouter);
AllRouter.use("/auth/admin", AdminAuthRouter);

export default AllRouter;
