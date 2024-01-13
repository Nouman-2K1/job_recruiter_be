import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CandidateUrlModel = sequelize.define("candidate_url", {
  urlTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CandidateModel.hasMany(CandidateUrlModel, { as: "candidateUrls" });
CandidateUrlModel.belongsTo(CandidateModel);

export default CandidateUrlModel;
