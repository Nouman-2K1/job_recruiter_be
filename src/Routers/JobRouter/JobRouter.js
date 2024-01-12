import { Router } from "express";
import JobController from "../../Controllers/JobControler/JobContoler.js";
import AuthenticateMiddleware from "../../Middleware/Authinticate.js";
const JobRouter = Router();

JobRouter.get("/jobs", AuthenticateMiddleware, JobController.getAllJobs);

export default JobRouter;
