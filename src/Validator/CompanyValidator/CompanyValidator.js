import Joi from "joi";

const CompanyValidator = {
  addCompany: async (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().max(20).required(),
        tagline: Joi.string().max(100).required(),
        image: Joi.string().max(100).required(),
        description: Joi.string().max(100).required(),
        avg_salary: Joi.string().max(100).required(),
        location: Joi.string().max(100).required(),
        category: Joi.array().items(skillSchema),
      });
      const { error, value } = schema.validate(data);
      if (error) {
        return res.status(400).json({ messgae: "Invalid input", error });
      }
      next();
    } catch (error) {
      return res.status(500).json({ messgae: "bad data", error });
    }
  },
};

export default CompanyValidator;
