"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PostsData",
      [
        {
          Date: "12 Dec 2022",
          UserId: 5,
          IdeaId: 1,
          User: "Jack Bauer",
          IdeaName: "Community app",
          OneLiner: "Helping ideas to grow from 0 to 1 through a community",
          Text: "I have an new idea for social media app but I have no idea how to start or where to begin. Will like to ask the community's advice on my first few steps. Should I get the prototype first or should I talk to users first?",
          ImgURL: null,
          VideoURL: null,
          RequestType: "Ask for comments",
          NumberFollowers: 20,
          Tag1: "Social Media",
          Tag2: "Technology",
          Tag3: null,
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Date: "01 Jun 2021",
          UserId: 4,
          IdeaId: 2,
          User: "Beyonce",
          IdeaName: "Toy with human interaction",
          OneLiner: "Making your favourite toy a true companion",
          Text: "Can anyone connect me to a toy enthuenthusiast? Wanted to find out more from him/her on their love of toys",
          ImgURL: null,
          VideoURL: "https://youtu.be/EoGUlvhRYpk",
          RequestType: "Help Needed",
          NumberFollowers: 4,
          Tag1: "Toys",
          Tag2: null,
          Tag3: null,
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Date: "30 Apr 2022",
          UserId: 6,
          IdeaId: 1,
          User: "Chuck Norris",
          IdeaName: "American healthy food importing",
          OneLiner: "Bringing in top of the line healthy food from America",
          Text: "Will like ask if anyone is able to connect me with food retailers and F&Bs owners for them to trial some of my products?",
          ImgURL: null,
          VideoURL: null,
          RequestType: "Connections",
          NumberFollowers: 9,
          Tag1: "Healthy Food",
          Tag2: null,
          Tag3: null,
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Date: "30 Apr 2022",
          UserId: 5,
          IdeaId: 1,
          User: "Jack Bauer",
          IdeaName: "Community app",
          OneLiner: "Helping ideas to grow from 0 to 1 through a community",
          Text: null,
          ImgURL: null,
          VideoURL: null,
          RequestType: null,
          NumberFollowers: 4,
          Tag1: "Social media",
          Tag2: "Technology",
          Tag3: null,
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          Date: "11 Nov 2021",
          UserId: 4,
          IdeaId: 2,
          User: "Beyonce",
          IdeaName: "Exercise Tracker App",
          OneLiner: "An all-in-one exercise tracker",
          Text: null,
          ImgURL: null,
          VideoURL: null,
          RequestType: null,
          NumberFollowers: 4,
          Tag1: "Exercise",
          Tag2: "Tracker",
          Tag3: "Health",
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PostsData", null, {});
  },
};
