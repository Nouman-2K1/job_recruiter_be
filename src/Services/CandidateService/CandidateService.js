import CandidateModel from "../../Model/CandidateModel/CandidateModel.js";
const CandidateService = {
  getAllCandidate: async () => {
    const candidate = await CandidateModel.findAll();
    return candidate;
  },
};

export default CandidateService;
