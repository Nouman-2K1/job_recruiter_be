import Joi from "joi";

const AuthValidator = {
  registerUser: async (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        name: Joi.string().max(20).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).max(100).required(),
        role: Joi.string().min(6).max(100).required(),
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
  loginUser: async (req, res, next) => {
    try {
      const data = req.body;
      const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().min(6).max(100).required(),
        role: Joi.string().min(6).max(100).required(),
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

export default AuthValidator;
