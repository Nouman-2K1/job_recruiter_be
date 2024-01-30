import { Router } from "express";
import ApplicationController from "../../Controllers/ApplicationController/ApplicationController.js";
import AuthenticateCandidate from "../../Middleware/AuthinticateCandidate.js";
const ApplicationRouter = Router();

ApplicationRouter.get("/application", ApplicationController.getApplications);
ApplicationRouter.post(
  "/apply",
  AuthenticateCandidate,
  ApplicationController.apply
);

export default ApplicationRouter;
