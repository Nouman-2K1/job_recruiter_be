import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CompanyModel from "../CompanyModel/CompanyModel.js";
import JobModel from "../JobModel/JobModel.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
const CategoryModel = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CategoryModel.hasMany(CompanyModel, { onDelete: "cascade" });
CompanyModel.belongsTo(CategoryModel);

CategoryModel.hasMany(JobModel, { onDelete: "cascade" });
JobModel.belongsTo(CategoryModel);

CategoryModel.hasMany(CandidateModel, { onDelete: "cascade" });
CandidateModel.belongsTo(CategoryModel);

export default CategoryModel;
