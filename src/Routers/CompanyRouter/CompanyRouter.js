import { Router } from "express";
import CompanyController from "../../Controllers/CompanyController/CompanyController.js";
import AuthenticateEmployer from "../../Middleware/AuthinticateEmployer.js";
import CompanyValidator from "../../Validator/CompanyValidator/CompanyValidator.js";
const CompanyRouter = Router();

CompanyRouter.get("/company/:companyId", CompanyController.getSingleCompany);
CompanyRouter.get("/companies", CompanyController.getAllCompany);
CompanyRouter.post(
  "/company",
  AuthenticateEmployer,
  CompanyValidator.addCompany,
  CompanyController.addCompany
);
CompanyRouter.put(
  "/company/:companyId",
  AuthenticateEmployer,
  CompanyValidator.addCompany,
  CompanyController.updateCompany
);
CompanyRouter.delete(
  "/company/:companyId",
  AuthenticateEmployer,
  CompanyController.deleteCompany
);

export default CompanyRouter;
