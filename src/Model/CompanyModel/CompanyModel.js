import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import JobModel from "../JobModel/JobModel.js";
const CompanyModel = sequelize.define("company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tagline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descryption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avg_salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CompanyModel.hasMany(JobModel);
JobModel.belongsTo(CompanyModel);

export default CompanyModel;
