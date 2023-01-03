"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("IdeasData", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdeaId: {
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "Id",
        },
      },
      IdeaProfileImgURL: {
        type: Sequelize.TEXT,
      },
      IdeaName: {
        type: Sequelize.TEXT,
      },
      OneLiner: {
        type: Sequelize.TEXT,
      },
      Descr: {
        type: Sequelize.TEXT,
      },
      Purpose: {
        type: Sequelize.TEXT,
      },
      Differentator: {
        type: Sequelize.TEXT,
      },
      MainFeature: {
        type: Sequelize.TEXT,
      },
      OtherFeature: {
        type: Sequelize.TEXT,
      },
      TargetAud: {
        type: Sequelize.TEXT,
      },
      UsageReason: {
        type: Sequelize.TEXT,
      },
      ImgURL: {
        type: Sequelize.TEXT,
      },
      VideoURL: {
        type: Sequelize.TEXT,
      },
      Status: {
        type: Sequelize.TEXT,
      },
      NumberFollowers: {
        type: Sequelize.INTEGER,
      },
      Comments: {
        type: Sequelize.INTEGER,
      },
      Tag1: {
        type: Sequelize.TEXT,
      },
      Tag2: {
        type: Sequelize.TEXT,
      },
      Tag3: {
        type: Sequelize.TEXT,
      },
      Tag4: {
        type: Sequelize.TEXT,
      },
      Tag5: {
        type: Sequelize.TEXT,
      },
      Tag6: {
        type: Sequelize.TEXT,
      },
      Tag7: {
        type: Sequelize.TEXT,
      },
      Tag8: {
        type: Sequelize.TEXT,
      },
      Tag9: {
        type: Sequelize.TEXT,
      },
      Tag10: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("IdeasData");
  },
};
