import { Router } from "express";
import JobController from "../../Controllers/JobControler/JobContoler.js";
import AuthenticateEmployer from "../../Middleware/AuthinticateEmployer.js";
import JobValidator from "../../Validator/JobValidator/JobValidator.js";

const JobRouter = Router();

JobRouter.get("/job", JobController.getSingleJobs);
JobRouter.get("/jobs", JobController.getAllJobs);
JobRouter.post(
  "/addJob",
  AuthenticateEmployer,
  JobValidator.addJob,
  JobController.addJob
);
JobRouter.put(
  "/jobs/:jobId",
  AuthenticateEmployer,
  JobValidator.addJob,
  JobController.updateJob
);
JobRouter.delete("/jobs/:jobId", AuthenticateEmployer, JobController.deleteJob);

export default JobRouter;
