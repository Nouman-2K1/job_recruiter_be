import Joi from "joi";

const JobValidator = {
  addJob: async (req, res, next) => {
    try {
      const data = req.body;
      const skillSchema = Joi.object({
        name: Joi.string().required(),
      });

      const schema = Joi.object({
        company: Joi.string().max(20).required(),
        title: Joi.string().max(100).required(),
        location: Joi.string().max(100).required(),
        category: Joi.string().max(100).required(),
        job_posted: Joi.string().max(100).required(),
        application_deadline: Joi.string().max(100).required(),
        salary: Joi.string().max(100).required(),
        description: Joi.string().max(100).required(),
        type: Joi.string().max(100).required(),
        skill: Joi.array().items(skillSchema),
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

export default JobValidator;
