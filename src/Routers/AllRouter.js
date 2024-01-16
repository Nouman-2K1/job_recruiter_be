import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminAuthRouter from "./AdminAuthRouter/AdminAuthRouter.js";
import JobRouter from "./JobRouter/JobRouter.js";
import CompanyRouter from "./CompanyRouter/CompanyRouter.js";
import CandidateRouter from "./CandidateRouter/CandidateRouter.js";
const AllRouter = Router();

AllRouter.use("/auth/user", AuthRouter);
AllRouter.use("/auth/admin", AdminAuthRouter);
AllRouter.use("/", JobRouter);
AllRouter.use("/", CompanyRouter);
AllRouter.use("/", CandidateRouter);

export default AllRouter;
