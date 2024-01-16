import JobService from "../../Services/JobService/JobService.js";
const JobController = {
  getAllJobs: async (req, res) => {
    try {
      const job = await JobService.getAllJobs();
      if (!job) {
        return res.status(400).json({ message: "Job Not Exist" });
      }
      return res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default JobController;
