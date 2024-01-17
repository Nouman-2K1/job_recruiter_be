import { Router } from "express";
import JobController from "../../Controllers/JobControler/JobContoler.js";
import AuthenticateEmployer from "../../Middleware/AuthinticateEmployer.js";
const JobRouter = Router();

JobRouter.get("/jobs", AuthenticateEmployer, JobController.getAllJobs);

export default JobRouter;
