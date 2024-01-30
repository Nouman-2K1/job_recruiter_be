import CandidateModel from "../../Model/CandidateModel/CandidateModel.js";
import CategoryModel from "../../Model/CategoryModel/CategoryModel.js";
import SkillModel from "../../Model/SkillModel/SkillModel.js";
import CandidaetEducationModel from "../../Model/CandidateEducationModel/CandidateEducationModel.js";
import CandidateSkillModel from "../../Model/CandidateSkillModel/CandidateSkillModel.js";
import CandidateUrlModel from "../../Model/CandidateUrlModel/CandidateUrlModel.js";
import CandidaetExperienceModel from "../../Model/CandidateExprerienceModel/CandidateExperienceModel.js";
import ApplicationModel from "../../Model/ApplicationModel/ApplicationModel.js";
const CandidateService = {
  getSingleCandidate: async (candidateId) => {
    const candidate = await CandidateModel.findOne({
      where: {
        id: candidateId,
      },
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
  getAllCandidate: async (req) => {
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
          as: "CandidateEducations",
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
      cv,
    } = candidateData;
    const CAT = await CategoryModel.create({
      name: category,
    });

    const candidate = await CandidateModel.create({
      name,
      email,
      region,
      job_title,
      location,
      image,
      hourly_rate,
      description,
      categoryId: CAT.id,
      userId,
      status: true,
      cv,
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
  updateCandidate: async (req, candidateId, updatedCandidateData) => {
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
      cv,
    } = updatedCandidateData;

    const candidate = await CandidateModel.findByPk(candidateId);

    if (!candidate) {
      return { error: "Candidate not found" };
    }
    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (!categoryId) {
      return { error: "Invalid Category" };
    }
    candidate.name = name;
    candidate.email = email;
    candidate.region = region;
    candidate.job_title = job_title;
    candidate.location = location;
    candidate.image = image;
    candidate.hourly_rate = hourly_rate;
    candidate.description = description;
    candidate.candidateId = userId;
    candidate.cv = cv;
    candidate.status = true;

    candidate.categoryid = categoryId.id;

    if (skill && skill.length > 0) {
      const skillInstances = await SkillModel.bulkCreate(
        skill.map((skill) => ({ name: skill.name }))
      );
      await candidate.setSkills(skillInstances);
    } else {
      await candidate.setSkills([]);
    }

    if (url && url.length > 0) {
      const urlInstances = await CandidateUrlModel.bulkCreate(
        url.map((urlData) => ({
          urlTitle: urlData.urlname,
          url: urlData.urllink,
        }))
      );
      await candidate.setCandidateUrls(urlInstances);
    } else {
      await candidate.setCandidateUrls([]);
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
      await candidate.setCandidateExperiences(experienceInstances);
    } else {
      await candidate.setCandidateExperiences([]);
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
      await candidate.setCandidateEducations(educationInstances);
    } else {
      await candidate.setCandidateEducations([]);
    }

    await candidate.save();

    return candidate;
  },

  deleteCandidate: async (candidateId) => {
    const candidate = await CandidateModel.findByPk(candidateId);
    const skillIds = await CandidateSkillModel.findAll({
      where: { candidateId },
    });

    await SkillModel.destroy({
      where: { id: skillIds.map((id) => id.skillId) },
    });
    if (!candidate) {
      return { error: "Candidate not found" };
    }
    await candidate.destroy();

    return { message: "Candidate deleted successfully" };
  },
  resumeCounter: async (req) => {
    const userId = req.session.user.id;
    const resumeCount = await CandidateModel.count({
      where: { userId },
    });
    return { resumeCount };
  },
  applyedJobCounter: async (req) => {
    const userId = req.session.user.id;
    const applyedJobCount = await ApplicationModel.count({
      where: { userId },
    });
    return { applyedJobCount };
  },
};

export default CandidateService;
