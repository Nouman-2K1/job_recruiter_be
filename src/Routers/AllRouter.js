import { Router } from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import AdminAuthRouter from "./AdminAuthRouter/AdminAuthRouter.js";
import JobRouter from "./JobRouter/JobRouter.js";
import CompanyRouter from "./CompanyRouter/CompanyRouter.js";
import CandidateRouter from "./CandidateRouter/CandidateRouter.js";
import ApplicationRouter from "./ApplicationRouter/ApplicationRouter.js";
const AllRouter = Router();

AllRouter.use("/auth/user", AuthRouter);
AllRouter.use("/auth/admin", AdminAuthRouter);
AllRouter.use("/", JobRouter);
AllRouter.use("/", CompanyRouter);
AllRouter.use("/", CandidateRouter);
AllRouter.use("/", ApplicationRouter);

export default AllRouter;
