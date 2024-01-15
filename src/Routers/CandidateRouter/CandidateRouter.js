import { Router } from "express";
import CandidateController from "../../Controllers/CandidateController/CandidateController.js";
import CandidateValidator from "../../Validator/CandidateValidator/candidateValidator.js";
import AuthenticateMiddleware from "../../Middleware/Authinticate.js";
const CandidateRouter = Router();

CandidateRouter.get(
  "/candidates",
  AuthenticateMiddleware,
  CandidateController.getAllCandidate
);
CandidateRouter.post(
  "/resume",
  AuthenticateMiddleware,
  CandidateValidator.addCandidate,
  CandidateController.addCandidate
);
CandidateRouter.put(
  "/updateResume/:candidateId",
  AuthenticateMiddleware,
  CandidateController.updateCandidate
);
CandidateRouter.delete(
  "/deleteResume/:candidateId",
  AuthenticateMiddleware,
  CandidateController.deleteCandidate
);
export default CandidateRouter;
