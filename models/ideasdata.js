"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IdeasData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "UserId",
      });
    }
  }
  IdeasData.init(
    {
      IdeaId: DataTypes.INTEGER,
      // UserId: DataTypes.INTEGER,
      UserId: {
        type: DataTypes.INTEGER,
        references: { model: "Users", key: "id" },
      },
      IdeaProfileImgURL: DataTypes.TEXT,
      IdeaName: DataTypes.TEXT,
      OneLiner: DataTypes.TEXT,
      Descr: DataTypes.TEXT,
      Purpose: DataTypes.TEXT,
      Differentator: DataTypes.TEXT,
      MainFeature: DataTypes.TEXT,
      OtherFeature: DataTypes.TEXT,
      TargetAud: DataTypes.TEXT,
      UsageReason: DataTypes.TEXT,
      ImgURL: DataTypes.TEXT,
      VideoURL: DataTypes.TEXT,
      Status: DataTypes.TEXT,
      NumberFollowers: DataTypes.INTEGER,
      Comments: DataTypes.INTEGER,
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
      modelName: "IdeasData",
    }
  );
  return IdeasData;
};
