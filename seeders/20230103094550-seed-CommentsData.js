"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CommentsData",
      [
        {
          PostId: 1,
          CommentId: 1,
          UserId: 2,
          User: "Lizzie Queen",
          Comment:
            "Wow that's an interesting idea. What you can do now is do a market research if it solves people's pain point",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
          PostId: 1,
          CommentId: 2,
          UserId: 3,
          User: "Justin Trudeau",
          Comment:
            "Also check what are the specific features users are looking for in such a platform",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
          PostId: 2,
          CommentId: 1,
          UserId: 5,
          User: "Jack Bauer",
          Comment:
            "I can connect you with someone who is a collector. Will PM you.",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },

        {
          PostId: 4,
          CommentId: 1,
          UserId: 6,
          User: "Chuck Norris",
          Comment:
            "Sounds exciting! Would love to know how this idea progress. Idea followed!",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },

        {
          PostId: 4,
          CommentId: 2,
          UserId: 4,
          User: "Beyonce",
          Comment:
            "Congraluations! Sounds like a something that could really help aspiring entrepreneur!",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },

        {
          PostId: 1,
          CommentId: 3,
          UserId: 4,
          User: "Beyonce",
          Comment:
            "What are the demographics of the target audience you are looking for? Identifying this is necessary to find the right people that will be keen to use this platform and have certain expectations of what they want from it",
          createdAt: "2021-08-16T23:00:33.010+02:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CommentsData", null, {});
  },
};
