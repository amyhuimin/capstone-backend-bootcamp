"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserEmail: {
        type: Sequelize.STRING,
      },
      UserName: {
        type: Sequelize.STRING,
      },
      ProfilePicURL: {
        type: Sequelize.STRING,
      },
      Ideas: {
        type: Sequelize.INTEGER,
      },
      FollowIdeas: {
        type: Sequelize.INTEGER,
      },
      FollowPosts: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Users");
  },
};
