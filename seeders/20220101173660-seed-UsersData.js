"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          UserEmail: "michelleobama@mail.com",
          UserName: "MichelleObama",
          ProfilePicURL:
            "https://www.stylist.co.uk/images/app/uploads/2021/04/02113148/michelle-obama-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
          Ideas: 1,
          FollowIdeas: '{"1": "1", "2" : "2", "3": "3"}',
          FollowPosts: '{"1": "1", "2" : "2", "3": "3", "7": "1"}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserEmail: "elizabethwindsor@mail.com",
          UserName: "LizzieQueen",
          ProfilePicURL:
            "https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2022/09/08/000-32hx6dh.jpeg",
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
            "https://pbs.twimg.com/profile_images/725725998357069824/iV3JHS1N_400x400.jpg",
          Ideas: 1,
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
          Ideas: 2,
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
          Ideas: 1,
          FollowIdeas: '{"2" : "2", "3": "3"}',
          FollowPosts: '{"1": "1", "3": "3"}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserEmail: "chucknorris@mail.com",
          UserName: "ChuckNorris",
          ProfilePicURL:
            "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
          Ideas: 1,
          FollowIdeas: '{"1": "1", "2" : "2", "3": "3"}',
          FollowPosts: '{"1": "1", "2" : "2", "3": "3"}',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
