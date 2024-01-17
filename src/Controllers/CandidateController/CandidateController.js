import CandidateService from "../../Services/CandidateService/CandidateService.js";
const CandidateController = {
  getCandidate: async (req, res) => {
    try {
      const candidate = await CandidateService.getCandidate(req);
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
      return res
        .status(201)
        .json({ message: "Candidate updated Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteCandidate: async (req, res) => {
    try {
      const candidateId = req.params.candidateId;
      const candidate = await CandidateService.deleteCandidate(candidateId);
      return res
        .status(201)
        .json({ message: "Candidate Deleted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default CandidateController;
