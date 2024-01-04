import UserModel from "../Model/UserModel/UserModel.js";

const dbInit = async () => {
  await UserModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
