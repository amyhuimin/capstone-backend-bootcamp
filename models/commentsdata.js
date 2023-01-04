"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommentsData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CommentsData.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      PostId: DataTypes.INTEGER,
      CommentId: DataTypes.INTEGER,
      UserId: {
        type: DataTypes.INTEGER,
      },
      User: DataTypes.TEXT,
      Comment: DataTypes.TEXT,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "CommentsData",
    }
  );
  return CommentsData;
};
