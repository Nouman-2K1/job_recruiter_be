import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import AdminModel from "../../Model/AdminModel/AdminModel.js";
const AdminAuthService = {
  registerAdmin: async (adminData) => {
    const { name, email, password } = adminData;
    const adminExist = await AdminModel.findOne({ where: { email } });

    if (adminExist) {
      throw new Error("admin with this Email already exists");
    }

    const hashedPassword = await hash(password, 10);

    const newAdmin = await AdminModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return newAdmin;
  },
  loginAdmin: async (req, adminData) => {
    const { email, password } = adminData;
    const admin = await AdminModel.findOne({ where: { email } });
    if (!admin) {
      throw new Error(`admin with this ${email} do not exist`);
    }
    const comparedPassword = await compare(password, admin.password);
    if (!comparedPassword) {
      throw new Error(`Invalid Password`);
    }
    const admindata = {
      id: admin.id,
      email: admin.email,
    };
    const admintoken = jwt.sign(admindata, process.env.JWTSECRET, {
      expiresIn: "14d",
    });
    req.session.admintoken = admintoken;
    req.session.admin = admindata;
    await req.session.save();
    return {
      admintoken,
      admindata,
    };
  },
};

export default AdminAuthService;
