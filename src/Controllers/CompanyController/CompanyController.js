import CompanyService from "../../Services/CompanyService/CompanyService.js";
const CompanyController = {
  getSingleCompany: async (req, res) => {
    try {
      const companyId = req.params.companyId;
      const company = await CompanyService.getSingleCompany(companyId);
      if (!company) {
        return res.status(400).json({ message: "Companies Not Exist" });
      }
      return res.status(200).json(company);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
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
  addCompany: async (req, res) => {
    try {
      const company = await CompanyService.addCompany(req, req.body);
      if (!company) {
        return res
          .status(400)
          .json({ message: "Error in Adding Copmany, Please Retry" });
      }
      return res.status(200).json({ messsage: "Company Added Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  updateCompany: async (req, res) => {
    try {
      const companyid = req.params.companyId;
      const company = await CompanyService.updateCompany(
        req,
        companyid,
        req.body
      );
      return res.status(201).json({ message: "Company updated Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  deleteCompany: async (req, res) => {
    try {
      const companyId = req.params.companyId;
      const company = await CompanyService.deleteCompany(companyId);
      return res.status(201).json({ message: "Company Deleted Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default CompanyController;
