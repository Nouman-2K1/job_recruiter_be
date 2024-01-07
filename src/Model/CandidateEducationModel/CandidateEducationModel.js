import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidaetEducationModel = sequelize.define("candidate_education", {
  title: {
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
  incomplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CandidateModel.hasMany(CandidaetEducationModel);
CandidaetEducationModel.belongsTo(CandidateModel);
export default CandidaetEducationModel;
