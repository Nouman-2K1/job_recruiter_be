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
  getSingleJobs: async (req, res) => {
    try {
      const jobId = req.params.jobId;
      const job = await JobService.getSingleJobs(jobId);
      if (!job) {
        return res.status(400).json({ message: "Job Not Exist" });
      }
      return res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  addJob: async (req, res) => {
    try {
      const job = await JobService.addJob(req.body);
      if (!job) {
        return res.status(400).json({ message: "Error adding Job" });
      }
      return res.status(201).json(job);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateJob: async (req, res) => {
    try {
      const jobId = req.params.jobId;
      const job = await JobService.updateJob(jobId, req.body);
      return res.status(201).json({ message: "Job updated Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteJob: async (req, res) => {
    try {
      const jobId = req.params.jobId;
      const job = await JobService.deleteJob(jobId);
      return res.status(200).json({ message: "Job Deleted Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default JobController;
