import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../Model/UserModel/UserModel.js";

const AuthService = {
  registerUser: async (userData) => {
    const { name, email, password, role } = userData;
    const userExist = await UserModel.findOne({ where: { email } });

    if (userExist) {
      throw new Error("user with this Email already exists");
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return newUser;
  },
  loginUser: async (req, userData) => {
    const { email, password } = userData;
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      throw new Error(`user with this ${email} do not exist`);
    }
    const comparedPassword = await compare(password, user.password);
    if (!comparedPassword) {
      throw new Error(`Invalid Password`);
    }
    const data = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const token = jwt.sign(data, process.env.JWTSECRET, {
      expiresIn: "14d",
    });
    req.session.token = token;
    req.session.user = data;
    await req.session.save();
    return {
      token,
      data,
    };
  },
};

export default AuthService;
