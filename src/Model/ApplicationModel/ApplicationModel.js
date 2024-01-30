import { application } from "express";
import sequelize from "../../db/config.js";
import JobModel from "../JobModel/JobModel.js";
import UserModel from "../UserModel/UserModel.js";
const ApplicationModel = sequelize.define("application", {
  cv: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

JobModel.belongsToMany(UserModel, {
  through: application,
  onDelete: "CASCADE",
});
UserModel.belongsToMany(JobModel, {
  through: application,
  onDelete: "CASCADE",
});

export default ApplicationModel;
