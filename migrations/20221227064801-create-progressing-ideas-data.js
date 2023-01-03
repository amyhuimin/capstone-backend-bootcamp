"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProgressingIdeas", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ImgURL: {
        type: Sequelize.TEXT,
        references: {
          model: "Users",
          key: "ProfilePicURL",
        },
      },
      IdeaName: {
        type: Sequelize.TEXT,
        references: {
          model: "Users",
          key: "IdeaName",
        },
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
    await queryInterface.dropTable("ProgressingIdeas");
  },
};
