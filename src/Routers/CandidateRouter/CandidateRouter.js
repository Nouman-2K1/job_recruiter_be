import { Router } from "express";
import CandidateController from "../../Controllers/CandidateController/CandidateController.js";
import CandidateValidator from "../../Validator/CandidateValidator/candidateValidator.js";
import AuthenticateCandidate from "../../Middleware/AuthinticateCandidate.js";
const CandidateRouter = Router();

CandidateRouter.get(
  "/candidate/:candidateId",
  CandidateController.getSingleCandidate
);
CandidateRouter.get("/candidates", CandidateController.getAllCandidate);
CandidateRouter.post(
  "/resume",
  AuthenticateCandidate,
  CandidateValidator.addCandidate,
  CandidateController.addCandidate
);
CandidateRouter.put(
  "/updateResume/:candidateId",
  AuthenticateCandidate,
  CandidateValidator.addCandidate,
  CandidateController.updateCandidate
);
CandidateRouter.delete(
  "/deleteResume/:candidateId",
  AuthenticateCandidate,
  CandidateController.deleteCandidate
);
CandidateRouter.get(
  "/resumeCounter",
  AuthenticateCandidate,
  CandidateController.resumeCounter
);
CandidateRouter.get(
  "/ApplyedJobCounter",
  AuthenticateCandidate,
  CandidateController.applyedJobCounter
);
export default CandidateRouter;
