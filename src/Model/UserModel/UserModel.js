import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import CandidateModel from "../CandidateModel/CandidateModel.js";
import CompanyModel from "../CompanyModel/CompanyModel.js";
const UserModel = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;

UserModel.hasMany(CandidateModel);
CandidateModel.belongsTo(UserModel);
UserModel.hasMany(CompanyModel);
CompanyModel.belongsTo(UserModel);
