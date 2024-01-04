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
  loginuser: async (req, res) => {
    try {
      const user = await AuthService.loginUser(req, req.body);
      const { token, data } = user;
      return res
        .status(200)
        .json({ message: "user Loged in Sussceefully", token, data });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Bad Requset" });
    }
  },
};

export default AuthController;
