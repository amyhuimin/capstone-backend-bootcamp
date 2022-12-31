"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserEmail: DataTypes.STRING,
      UserName: DataTypes.STRING,
      ProfilePicURL: DataTypes.STRING,
      Ideas: DataTypes.INTEGER,
      FollowIdeas: DataTypes.JSON,
      FollowPosts: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
