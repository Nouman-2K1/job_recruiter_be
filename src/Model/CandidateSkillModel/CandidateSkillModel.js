import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SkillModel from "../SkillModel/SkillModel.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidateSkillModel = sequelize.define("candidate_skill", {});

SkillModel.belongsToMany(CandidateModel, {
  through: CandidateSkillModel,
  onDelete: "CASCADE",
});
CandidateModel.belongsToMany(SkillModel, {
  through: CandidateSkillModel,
  onDelete: "CASCADE",
});

export default CandidateSkillModel;
