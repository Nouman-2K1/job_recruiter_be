import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidaetEducationModel = sequelize.define("candidate_education", {
  institution: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marks: {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CandidateModel.hasMany(CandidaetEducationModel, {
  as: "CandidateEducations",
  onDelete: "cascade",
});
CandidaetEducationModel.belongsTo(CandidateModel);
export default CandidaetEducationModel;
