import AuthService from "../../Services/AuthService/AuthService.js";
const AuthController = {
  registerUser: async (req, res) => {
    try {
      const user = await AuthService.registerUser(req.body);
      return res.status(201).json({ message: "user registered successfully" });
    } catch (error) {
      if (error.message === "user with this Email already exists") {
        return res
          .status(400)
          .json({ message: "user with this email already exists" });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await AuthService.loginUser(req, req.body);
      const { token, data } = user;
      return res
        .status(200)
        .json({ message: "user Loged in Sussceefully", token, data });
    } catch (error) {
      let statusCode = 500;
      if (error.message == "user with this email do not exist") {
        statusCode = 403;
      } else if (error.message == "Invalid Password") {
        statusCode = 403;
      }
      return res
        .status(statusCode)
        .json({ message: "Bad Requset", error: error.message });
    }
  },
};

export default AuthController;
