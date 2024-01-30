import Joi from "joi";

const CandidateValidator = {
  addCandidate: async (req, res, next) => {
    try {
      const data = req.body;
      const skillSchema = Joi.object({
        name: Joi.string().required(),
      });

      const urlSchema = Joi.object({
        urlname: Joi.string().required(),
        urllink: Joi.string().required(),
      });

      const educationSchema = Joi.object({
        institution: Joi.string().required(),
        degree: Joi.string().required(),
        marks: Joi.string().required(),
        // startDate: Joi.date().required(),
        // endDate: Joi.date().required(),
        description: Joi.string().required(),
      });

      const experienceSchema = Joi.object({
        title: Joi.string().required(),
        company: Joi.string().required(),
        // startDate: Joi.date().required(),
        // endDate: Joi.date().required(),
        description: Joi.string().required(),
      });

      const schema = Joi.object({
        name: Joi.string().max(20).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        region: Joi.string().max(100).required(),
        job_title: Joi.string().max(100).required(),
        location: Joi.string().max(100).required(),
        image: Joi.string().max(100).required(),
        category: Joi.string().max(100).required(),
        hourly_rate: Joi.string().max(100).required(),
        description: Joi.string().max(100).required(),

        cv: Joi.string().max(100).required(),
        skill: Joi.array().items(skillSchema),
        url: Joi.array().items(urlSchema),
        education: Joi.array().items(educationSchema),
        experience: Joi.array().items(experienceSchema),
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

export default CandidateValidator;
