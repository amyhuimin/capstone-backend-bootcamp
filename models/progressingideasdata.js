"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProgressingIdeasData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProgressingIdeasData.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ImgURL: DataTypes.TEXT,
      IdeaName: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ProgressingIdeas",
    },
    
  );
  return ProgressingIdeasData;
};
