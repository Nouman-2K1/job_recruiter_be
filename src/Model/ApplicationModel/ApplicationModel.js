import { DataTypes } from "sequelize";
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
  through: ApplicationModel,
  onDelete: "CASCADE",
});
UserModel.belongsToMany(JobModel, {
  through: ApplicationModel,
  onDelete: "CASCADE",
});

export default ApplicationModel;
