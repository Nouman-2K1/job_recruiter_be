import CategoryModel from "../../Model/CategoryModel/CategoryModel.js";
import CompanyModel from "../../Model/CompanyModel/CompanyModel.js";
const CompanyService = {
  getSingleCompany: async (companyId) => {
    const company = await CompanyModel.findOne({
      where: {
        id: companyId,
      },
    });
    return company;
  },
  getAllCompany: async () => {
    const company = await CompanyModel.findAll();
    return company;
  },
  addCompany: async (req, companyData) => {
    const userId = req.session.user.id;
    const {
      name,
      tagline,
      image,
      description,
      avg_salary,
      location,
      category,
    } = companyData;
    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (!categoryId) {
      throw new Error("Invalid Category");
    }
    const company = await CompanyModel.create({
      name,
      tagline,
      image,
      description,
      avg_salary,
      location,
      categoryId: categoryId.id,
      userId,
    });
    return company;
  },
  updateCompany: async (req, companyId, updateCompanyData) => {
    const userId = req.session.user.id;
    const {
      name,
      tagline,
      image,
      description,
      avg_salary,
      location,
      category,
    } = updateCompanyData;

    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });

    if (!categoryId) {
      throw new Error("Invalid Category");
    }

    const company = await CompanyModel.findByPk(companyId);

    if (!company) {
      throw new Error("Conpany not found");
    }

    company.name = name;
    company.tagline = tagline;
    company.image = image;
    company.description = description;
    company.avg_salary = avg_salary;
    company.location = location;
    company.categoryId = categoryId.id;
    company.userId = userId;

    await company.save();

    return company;
  },
  deleteCompany: async (companyId) => {
    const company = await CompanyModel.findByPk(companyId);
    if (!company) {
      throw new Error("Company not found");
    }
    await company.destroy();
    return { message: "Company deleted successfully" };
  },
};
export default CompanyService;
