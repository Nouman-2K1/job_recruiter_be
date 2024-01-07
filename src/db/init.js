import UserModel from "../Model/UserModel/UserModel.js";
import AdminModel from "../Model/AdminModel/AdminModel.js";
import CandidaetEducationModel from "../Model/CandidateEducationModel/CandidateEducationModel.js";
import CandidaetExperienceModel from "../Model/CandidateExprerienceModel/CandidateExperienceModel.js";
import CandidateModel from "../Model/CandidateModel/CandidateModel.js";
import CandidateSkillModel from "../Model/CandidateSkillModel/CandidateSkillModel.js";
import CandidateUrlModel from "../Model/CandidateUrlModel/CandidateUrlModel.js";
import CompanyModel from "../Model/CompanyModel/CompanyModel.js";
import SkillModel from "../Model/SkillModel/SkillModel.js";
import JobModel from "../Model/JobModel/JobModel.js";
import JobSkillModel from "../Model/JobSkillModel/JobSkillModel.js";

const dbInit = async () => {
  await UserModel.sync({
    alter: true,
    force: false,
  });
  await AdminModel.sync({
    alter: true,
    force: false,
  });
  await CompanyModel.sync({
    alter: true,
    force: false,
  });
  await JobModel.sync({
    alter: true,
    force: false,
  });
  await SkillModel.sync({
    alter: true,
    force: false,
  });
  await JobSkillModel.sync({
    alter: true,
    force: false,
  });
  await CandidateModel.sync({
    alter: true,
    force: false,
  });
  await CandidateSkillModel.sync({
    alter: true,
    force: false,
  });
  await CandidateUrlModel.sync({
    alter: true,
    force: false,
  });
  await CandidaetEducationModel.sync({
    alter: true,
    force: false,
  });
  await CandidaetExperienceModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
