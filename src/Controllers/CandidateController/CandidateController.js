import CandidateService from "../../Services/CandidateService/CandidateService.js";
const CandidateController = {
  getAllCandidate: async (req, res) => {
    try {
      const candidate = await CandidateService.getAllCandidate();
      if (!candidate) {
        return res.status(400).json({ message: "Companies Not Exist" });
      }
      return res.status(200).json(company);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default CandidateController;
