const JobService = {
  getAllJobs: async () => {
    const job = await AdminModel.findAll();
    return job;
  },
};
export default JobService;
