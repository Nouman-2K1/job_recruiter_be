import AdminAuthService from "../../Services/AdminAuthService/AdminAuthService.js";
const AdminAuthController = {
  registerAdmin: async (req, res) => {
    try {
      const admin = await AdminAuthService.registerAdmin(req.body);
      return res.status(201).json({ message: "admin registered successfully" });
    } catch (error) {
      if (error.message === "admin with this Email already exists") {
        return res
          .status(400)
          .json({ message: "admin with this email already exists" });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  loginAdmin: async (req, res) => {
    try {
      const admin = await AdminAuthService.loginAdmin(req, req.body);
      const { admintoken, admindata } = admin;
      return res.status(200).json({
        message: "admin Loged in Sussceefully",
        admintoken,
        admindata,
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({ message: "Bad Requset" });
    }
  },
};

export default AdminAuthController;
