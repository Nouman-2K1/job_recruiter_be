import CompanyService from "../../Services/CompanyService/CompanyService.js";
const CompanyController = {
  getAllCompany: async (req, res) => {
    try {
      const company = await CompanyService.getAllCompany();
      if (!company) {
        return res.status(400).json({ message: "Companies Not Exist" });
      }
      return res.status(200).json(company);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default CompanyController;
