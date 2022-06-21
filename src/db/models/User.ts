import { Attributes, DataTypes, Model } from "sequelize";
import db from "..";

export type UserType = {
  firstName: string;
  lastName?: string;
};

export type UserModel = Model<UserType>;

const User = db.define<UserModel>("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
});

export const createUser = (newUser: UserType) => User.create(newUser);

export const getAllUsers = () =>
  User.findAll().then((usrs) => console.log(usrs));

export default User;
