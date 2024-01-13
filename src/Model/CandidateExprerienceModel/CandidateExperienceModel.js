import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidaetExperienceModel = sequelize.define("candidate_experience", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

CandidateModel.hasMany(CandidaetExperienceModel, {
  as: "candidateExperiences",
});
CandidaetExperienceModel.belongsTo(CandidateModel);
export default CandidaetExperienceModel;
