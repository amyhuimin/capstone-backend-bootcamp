"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostsData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostsData.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      IdeaId: DataTypes.INTEGER,
      Date: DataTypes.DATE,
      UserPostId: DataTypes.INTEGER,
      User: DataTypes.TEXT,
      IdeaName: DataTypes.TEXT,
      OneLiner: DataTypes.TEXT,
      Text: DataTypes.TEXT,
      ImgURL: DataTypes.TEXT,
      VideoURL: DataTypes.TEXT,
      RequestType: DataTypes.TEXT,
      NumberFollowers: DataTypes.INTEGER,
      Tag1: DataTypes.TEXT,
      Tag2: DataTypes.TEXT,
      Tag3: DataTypes.TEXT,
      Tag4: DataTypes.TEXT,
      Tag5: DataTypes.TEXT,
      Tag6: DataTypes.TEXT,
      Tag7: DataTypes.TEXT,
      Tag8: DataTypes.TEXT,
      Tag9: DataTypes.TEXT,
      Tag10: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "PostsData",
    }
  );
  return PostsData;
};
