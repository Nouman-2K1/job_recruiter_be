import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import JobModel from "../JobModel/JobModel.js";
const TypeModel = sequelize.define("type", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

TypeModel.hasMany(JobModel);
JobModel.belongsTo(TypeModel);
export default TypeModel;
