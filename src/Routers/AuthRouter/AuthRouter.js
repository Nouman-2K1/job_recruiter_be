import { Router } from "express";
import AuthController from "../../Controllers/Auth/AuthController.js";
import AuthValidator from "../../Validator/AuthValidator/AuthValidator.js";

const AuthRouter = Router();

AuthRouter.post(
  "/register",
  AuthValidator.registerUser,
  AuthController.registerUser
);
AuthRouter.post("/login", AuthValidator.loginUser, AuthController.loginuser);

export default AuthRouter;
