import CandidateModel from "../../Model/CandidateModel/CandidateModel.js";
import CategoryModel from "../../Model/CategoryModel/CategoryModel.js";
import SkillModel from "../../Model/SkillModel/SkillModel.js";
import CandidaetEducationModel from "../../Model/CandidateEducationModel/CandidateEducationModel.js";
import CandidateSkillModel from "../../Model/CandidateSkillModel/CandidateSkillModel.js";
import CandidateUrlModel from "../../Model/CandidateUrlModel/CandidateUrlModel.js";
import CandidaetExperienceModel from "../../Model/CandidateExprerienceModel/CandidateExperienceModel.js";
const CandidateService = {
  getAllCandidate: async () => {
    const candidate = await CandidateModel.findAll({
      include: [
        {
          model: CandidateUrlModel,
          as: "candidateUrls",
        },
        {
          model: CandidaetExperienceModel,
          as: "candidateExperiences",
        },
        {
          model: CandidaetEducationModel,
          as: "candidateEducations",
        },
      ],
    });
    return candidate;
  },
  addCandidate: async (req, candidateData) => {
    const userId = req.session.user.id;

    const {
      name,
      email,
      region,
      job_title,
      location,
      image,
      category,
      hourly_rate,
      description,
      skill,
      url,
      education,
      experience,
    } = candidateData;

    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (!categoryId) {
      throw new Error("Invalid Category");
    }
    const candidate = await CandidateModel.create({
      name,
      email,
      region,
      job_title,
      location,
      image,
      hourly_rate,
      description,
      categoryid: categoryId.id,
      userId,
    });
    if (skill && skill.length > 0) {
      const skillInstances = await SkillModel.bulkCreate(
        skill.map((skill) => ({ name: skill.name }))
      );

      await candidate.addSkills(skillInstances);
    }

    if (url && url.length > 0) {
      const urlInstances = await CandidateUrlModel.bulkCreate(
        url.map((urlData) => ({
          urlTitle: urlData.urlname,
          url: urlData.urllink,
        }))
      );
      await candidate.addCandidateUrls(urlInstances);
    }

    if (experience && experience.length > 0) {
      const experienceInstances = await CandidaetExperienceModel.bulkCreate(
        experience.map((expData) => ({
          title: expData.title,
          company: expData.company,
          startDate: expData.startDate,
          endDate: expData.endDate,
          description: expData.description,
        }))
      );
      await candidate.addCandidateExperiences(experienceInstances);
    }

    if (education && education.length > 0) {
      const educationInstances = await CandidaetEducationModel.bulkCreate(
        education.map((eduData) => ({
          institution: eduData.institution,
          degree: eduData.degree,
          marks: eduData.marks,
          startDate: eduData.startDate,
          endDate: eduData.endDate,
          description: eduData.description,
        }))
      );
      await candidate.addCandidateEducations(educationInstances);
    }

    return candidate;
  },
};

export default CandidateService;
