"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        UserEmail: "michelleobama@mail.com",
        UserName: "MichelleObama",
        ProfilePicURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/1200px-Michelle_Obama_2013_official_portrait.jpg",
        Ideas: 0,
        FollowIdeas: '{"1": "1", "2" : "2"}',
        FollowPosts: '{"2" : "2", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserEmail: "elizabethwindsor@mail.com",
        UserName: "LizzieQueen",
        ProfilePicURL:
          "https://cdn.britannica.com/97/155297-050-E37867BF/Elizabeth-II-2007.jpg",
        Ideas: 0,
        FollowIdeas: '{"2" : "2", "3": "3"}',
        FollowPosts: '{"1" : "1", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserEmail: "justincanada@mail.com",
        UserName: "JustinTrudeau",
        ProfilePicURL:
          "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNzAwNTAyOTEwMjQ3OTY1/justin-trudeau-gettyimages-1242516020.jpg",
        Ideas: 0,
        FollowIdeas: '{"2" : "2", "3": "3"}',
        FollowPosts: '{"1" : "1", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserEmail: "beyonce@mail.com",
        UserName: "Beyonce",
        ProfilePicURL:
          "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        Ideas: 0,
        FollowIdeas: '{"1": "1", "2" : "2", "3": "3"}',
        FollowPosts: '{"1": "1", "2" : "2", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserEmail: "jackbauer@mail.com",
        UserName: "JackBauer",
        ProfilePicURL:
          "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        Ideas: 0,
        FollowIdeas: '{"2" : "2", "3": "3"}',
        FollowPosts: '{"1": "1", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserEmail: "chucknorrise@mail.com",
        UserName: "ChuckNorris",
        ProfilePicURL:
          "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        Ideas: 0,
        FollowIdeas: '{"1": "1", "2" : "2", "3": "3"}',
        FollowPosts: '{"1": "1", "2" : "2", "3": "3"}',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
