import CompanyModel from "../../Model/CompanyModel/CompanyModel.js";
const CompanyService = {
  getAllCompany: async () => {
    const company = await CompanyModel.findAll();
    return company;
  },
};
export default CompanyService;
