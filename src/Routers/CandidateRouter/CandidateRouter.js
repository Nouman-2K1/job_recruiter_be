import { Router } from "express";
import CandidateController from "../../Controllers/CandidateController/CandidateController.js";
import CandidateValidator from "../../Validator/CandidateValidator/candidateValidator.js";
import AuthenticateCandidate from "../../Middleware/AuthinticateCandidate.js";
const CandidateRouter = Router();

CandidateRouter.get(
  "/candidate",
  AuthenticateCandidate,
  CandidateController.getCandidate
);
CandidateRouter.post(
  "/resume",
  AuthenticateCandidate,
  CandidateValidator.addCandidate,
  CandidateController.addCandidate
);
CandidateRouter.put(
  "/updateResume/:candidateId",
  AuthenticateCandidate,
  CandidateController.updateCandidate
);
CandidateRouter.delete(
  "/deleteResume/:candidateId",
  AuthenticateCandidate,
  CandidateController.deleteCandidate
);
export default CandidateRouter;
