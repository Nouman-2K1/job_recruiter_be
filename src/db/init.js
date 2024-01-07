import UserModel from "../Model/UserModel/UserModel.js";
import AdminModel from "../Model/AdminModel/AdminModel.js";
const dbInit = async () => {
  await UserModel.sync({
    alter: true,
    force: false,
  });
  await AdminModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
