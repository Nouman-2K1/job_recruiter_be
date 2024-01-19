import CategoryModel from "../../Model/CategoryModel/CategoryModel.js";
import CompanyModel from "../../Model/CompanyModel/CompanyModel.js";
import JobModel from "../../Model/JobModel/JobModel.js";
import SkillModel from "../../Model/SkillModel/SkillModel.js";
import JobSkillModel from "../../Model/JobSkillModel/JobSkillModel.js";
const JobService = {
  getAllJobs: async () => {
    const job = await JobModel.findAll();
    return job;
  },
  getSingleJobs: async (jobId) => {
    const job = await JobModel.findOne({ where: { id: jobId } });
    return job;
  },
  addJob: async (jobData) => {
    const {
      company,
      title,
      location,
      category,
      job_posted,
      application_deadline,
      salary,
      type,
      description,
      skill,
    } = jobData;
    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (!categoryId) {
      throw new Error("Invalid Category");
    }

    const companyId = await CompanyModel.findOne({
      where: {
        name: company,
      },
    });
    if (!companyId) {
      throw new Error("Invalid Company");
    }
    const job = await JobModel.create({
      title,
      location,
      job_posted,
      application_deadline,
      salary,
      type,
      description,
      categoryId: categoryId.id,
      companyId: companyId.id,
    });
    if (skill && skill.length > 0) {
      const skillInstances = await SkillModel.bulkCreate(
        skill.map((skill) => ({ name: skill.name }))
      );

      await job.addSkills(skillInstances);
    }
    return job;
  },
  updateJob: async (jobId, updatedJobData) => {
    const {
      company,
      title,
      location,
      category,
      job_posted,
      application_deadline,
      salary,
      type,
      description,
      skill,
    } = updatedJobData;

    const job = await JobModel.findByPk(jobId);

    if (!job) {
      throw new Error("Job not found");
    }

    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (!categoryId) {
      throw new Error("Invalid Category");
    }

    const companyId = await CompanyModel.findOne({
      where: {
        name: company,
      },
    });
    if (!companyId) {
      throw new Error("Invalid Company");
    }

    job.title = title;
    job.location = location;
    job.job_posted = job_posted;
    job.application_deadline = application_deadline;
    job.salary = salary;
    job.type = type;
    job.description = description;
    job.companyId = companyId.id;
    job.categoryid = categoryId.id;
    if (skill && skill.length > 0) {
      const skillInstances = await SkillModel.bulkCreate(
        skill.map((skill) => ({ name: skill.name }))
      );
      await job.setSkills(skillInstances);
    } else {
      await job.setSkills([]);
    }

    await job.save();

    return job;
  },
  deleteJob: async (jobId) => {
    const job = await JobModel.findByPk(jobId);
    const skillIds = await JobSkillModel.findAll({
      where: { candidateId },
    });

    await SkillModel.destroy({
      where: { id: skillIds.map((id) => id.skillId) },
    });
    if (!job) {
      throw new Error("Job not found");
    }
    await job.destroy();

    return { message: "Job deleted successfully" };
  },
};
export default JobService;
