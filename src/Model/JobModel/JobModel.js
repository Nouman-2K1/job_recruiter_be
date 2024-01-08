import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const JobModel = sequelize.define("job", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_posted: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  applicatio_deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hourly_rate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default JobModel;
