import { Router } from "express";
import CompanyController from "../../Controllers/CompanyController/CompanyController.js";
import AuthenticateMiddleware from "../../Middleware/Authinticate.js";
const CompanyRouter = Router();

CompanyRouter.get(
  "/companies",
  AuthenticateMiddleware,
  CompanyController.getAllCompany
);

export default CompanyRouter;
