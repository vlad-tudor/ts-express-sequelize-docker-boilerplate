import { Sequelize } from "sequelize";

// pull these from an .env file
const db = new Sequelize("postgis-db", "postgis", "postgispassword", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    freezeTableName: true,
    timestamps: true, // createdAt, updatedAt
  },
});

export const syncDatabase = () => db.sync({ force: true });

export default db;
