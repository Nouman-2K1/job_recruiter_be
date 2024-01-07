import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidaetExperienceModel = sequelize.define("candidate_experience", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

CandidateModel.hasMany(CandidaetExperienceModel);
CandidaetExperienceModel.belongsTo(CandidateModel);
export default CandidaetExperienceModel;
