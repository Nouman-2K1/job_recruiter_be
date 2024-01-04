import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST || "localhost",
    port: process.env.DBPORT || 5432,
    dialect: process.env.DIALECT || "postgres",
    logging: false,
  }
);

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection Established");
  } catch (error) {
    console.log("Unable to Connect", error);
  }
};

export default sequelize;
