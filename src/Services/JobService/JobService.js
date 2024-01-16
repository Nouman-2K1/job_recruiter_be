import JobModel from "../../Model/JobModel/JobModel.js";
const JobService = {
  getAllJobs: async () => {
    const job = await JobModel.findAll();
    return job;
  },
};
export default JobService;
