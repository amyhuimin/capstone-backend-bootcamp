"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          UserEmail: "HAJIWEE@live.co.uk",
          UserName: "JungKook",
          ProfilePicURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg/220px-Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg",
          Ideas: 0,
          FollowIdeas: '{"1": "1", "2": "2", "3": "3"}',
          FollowPosts: '{"1": "1", "2": "2", "3": "3"}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
