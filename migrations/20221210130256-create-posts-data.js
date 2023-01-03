"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PostsData", {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdeaId: {
        type: Sequelize.INTEGER,
        references: {
          model: "IdeasData",
          key: "IdeaId",
        },
      },
      Date: {
        type: Sequelize.DATE,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "Id",
        },
      },
      User: {
        type: Sequelize.TEXT,
        references: {
          model: "Users",
          key: "UserName",
        },
      },
      IdeaName: {
        type: Sequelize.TEXT,
        references: {
          model: "IdeasData",
          key: "IdeaName",
        },
      },
      OneLiner: {
        type: Sequelize.TEXT,
      },
      Text: {
        type: Sequelize.TEXT,
      },
      ImgURL: {
        type: Sequelize.TEXT,
      },
      VideoURL: {
        type: Sequelize.TEXT,
      },
      RequestType: {
        type: Sequelize.TEXT,
      },
      NumberFollowers: {
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
    await queryInterface.dropTable("PostsData");
  },
};
