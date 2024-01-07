import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import JobModel from "../JobModel/JobModel.js";
import SkillModel from "../SkillModel/SkillModel.js";

const JobSkillModel = sequelize.define("job_skill", {});

SkillModel.belongsToMany(JobModel, { through: JobSkillModel });
JobModel.belongsToMany(SkillModel, { through: JobSkillModel });

export default JobSkillModel;
