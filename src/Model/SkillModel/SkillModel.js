import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const SkillModel = sequelize.define("skill", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default SkillModel;
