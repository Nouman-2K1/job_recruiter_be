import jwt from "jsonwebtoken";

const AuthenticateAdmin = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWTSECRET);

    if (!req.session.admin || !req.session.adminToken) {
      return res.status(401).json({
        message: "Invalid request",
      });
    }
    if (req.session.adminToken !== token) {
      return res.status(401).json({
        message: "Invalid request",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid request",
    });
  }
};

export default AuthenticateAdmin;
