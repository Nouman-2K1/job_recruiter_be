import CandidateService from "../../Services/CandidateService/CandidateService.js";
const CandidateController = {
  getSingleCandidate: async (req, res) => {
    try {
      const candidateId = req.params.candidateId;
      const candidate = await CandidateService.getSingleCandidate(candidateId);
      if (!candidate) {
        return res.status(400).json({ message: "Candidate Not Exist" });
      }
      return res.status(200).json(candidate);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getAllCandidate: async (req, res) => {
    try {
      const candidate = await CandidateService.getAllCandidate();
      if (!candidate) {
        return res.status(400).json({ message: "Candidates Not Exist" });
      }
      return res.status(200).json(candidate);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  addCandidate: async (req, res) => {
    try {
      const candidate = await CandidateService.addCandidate(req, req.body);
      if (candidate.error) {
        return res.status(404).json({ message: result.error });
      }
      return res.status(201).json({ message: "Candidate added Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateCandidate: async (req, res) => {
    try {
      const candidateId = req.params.candidateId;
      const candidate = await CandidateService.updateCandidate(
        req,
        candidateId,
        req.body
      );
      if (candidate.error) {
        return res.status(404).json({ message: result.error });
      }
      return res
        .status(201)
        .json({ message: "Candidate updated Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteCandidate: async (req, res) => {
    try {
      const candidateId = req.params.candidateId;
      const candidate = await CandidateService.deleteCandidate(candidateId);
      if (candidate.error) {
        return res.status(404).json({ message: result.error });
      }
      return res
        .status(200)
        .json({ message: "Candidate Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  resumeCounter: async (req, res) => {
    try {
      const candidateResumeCount = await CandidateService.resumeCounter(req);
      if (candidate.error) {
        return res.status(404).json({ message: result.error });
      }
      return res.status(200).json(candidateResumeCount);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default CandidateController;
