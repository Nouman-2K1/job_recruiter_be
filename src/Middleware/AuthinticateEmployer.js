import jwt from "jsonwebtoken";

const AuthenticateEmployer = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWTSECRET);

    if (!req.session.user || !req.session.token) {
      return res.status(401).json({
        message: "please Login",
      });
    }
    if (req.session.token !== token) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    if (req.session.user.role !== "employer") {
      return res.status(401).json({
        message: "Please Login As Employer",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid request",
    });
  }
};

export default AuthenticateEmployer;
