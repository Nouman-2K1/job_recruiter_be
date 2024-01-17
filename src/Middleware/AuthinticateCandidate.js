import jwt from "jsonwebtoken";

const AuthenticateCandidate = (req, res, next) => {
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
    if (req.session.user.role !== "candidate") {
      return res.status(401).json({
        message: "Please Login As Candidate",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid request",
    });
  }
};

export default AuthenticateCandidate;
