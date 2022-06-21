import { Sequelize } from "sequelize";

export const DB_URL = process.env.DB_URL || "";
export const POSTGRES_DB = process.env.POSTGRES_DB || "";
export const POSTGRES_USER = process.env.POSTGRES_USER || "";
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "";

export const DB_PORT = process.env.DB_PORT || "5432";

// pull these from an .env file
const db = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: DB_URL,
  port: parseInt(DB_PORT),
  dialect: "postgres",
  define: {
    freezeTableName: true,
    timestamps: true, // createdAt, updatedAt
  },
});

export const syncDatabase = () => db.sync({ force: true });

export default db;
