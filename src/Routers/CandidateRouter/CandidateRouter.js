import { Router } from "express";
import CandidateController from "../../Controllers/CandidateController/CandidateController.js";
import AuthenticateMiddleware from "../../Middleware/Authinticate.js";
const CandidateRouter = Router();

CandidateRouter.get(
  "/candidates",
  AuthenticateMiddleware,
  CandidateController.getAllCandidate
);

export default CandidateRouter;
