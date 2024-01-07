import { Router } from "express";
import AdminAuthValidator from "../../Validator/AdminAuthValidator/AdminAuthValidator.js";
import AdminAuthController from "../../Controllers/AdminAuthContorller/AdminAuthController.js";
const AdminAuthRouter = Router();

AdminAuthRouter.post(
  "/register",
  AdminAuthValidator.registerAdmin,
  AdminAuthController.registerAdmin
);
AdminAuthRouter.post(
  "/login",
  AdminAuthValidator.loginAdmin,
  AdminAuthController.loginAdmin
);

export default AdminAuthRouter;
