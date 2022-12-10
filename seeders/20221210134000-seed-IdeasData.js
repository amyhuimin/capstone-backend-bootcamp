"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "IdeasData",
      [
        {
          IdeaId: 1,
          UserId: 5,
          IdeaProfileImgURL:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
          IdeaName: "Community app",
          OneLiner: "Helping ideas to grow from 0 to 1 through a community",
          Descr:
            "A community of people helping each other to develop their ideas through providing comments, opinions, connections to build the idea into an actual business as the end goal",
          Purpose:
            "Helping people to grow in their ideas through crowd sourced information and connection and cultivating a community of potential entrepreneurs",
          Differentator: "Community driven and the only platform in the market",
          MainFeature:
            "Using social media in factilitating the growth of ideas",
          OtherFeature: "Platform to store all existing ideas",
          TargetAud: "Inspiring entrepenuers",
          UsageReason:
            "Not knowing how to turn into a business. Helps business to be more human centric",
          ImgURL:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
          VideoURL: "https://www.youtube.com/watch?v=J016xjUYkWI",
          Status: "Live",
          NumberFollowers: 20,
          Comments: 5,
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
          IdeaId: 2,
          UserId: 5,
          IdeaProfileImgURL:
            "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1666&q=80",
          IdeaName: "Toy with human interaction",
          OneLiner: "Making your favourite toy a true companion",
          Descr:
            "Developing and installing an small device into the the favourite toy that is AI powered with neural language processing which can recognise human interactions and offer a verbal response ",
          Purpose:
            "To make someone's favourite toy into an actual companion with real interaction",
          Differentator:
            "Ability for human interactions and able to add on to any toy",
          MainFeature: "AI trained languange understanding and replies",
          OtherFeature: "An add-on to be usable for any toy",
          TargetAud: "Toy enthusiast",
          UsageReason: "",
          ImgURL:
            "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1666&q=80",
          VideoURL: "https://www.youtube.com/watch?v=gooDvIP0eAM",
          Status: "Private",
          NumberFollowers: 0,
          Comments: 10,
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
          IdeaId: 3,
          UserId: 5,
          IdeaProfileImgURL:
            "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          IdeaName: "Idea idea idea idea idea idea idea idea ",
          OneLiner:
            "Oneliner oneliner oneliner oneliner oneliner oneliner oneliner",
          Descr:
            "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ",
          Purpose:
            "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
          Differentator:
            "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
          MainFeature:
            "text text text text text text text text text text text text",
          OtherFeature:
            "text text text text text text text text text text text text",
          TargetAud:
            "text text text text text text text text text text text text",
          UsageReason:
            "text text text text text text text text text text text text",
          ImgURL:
            "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          VideoURL: "https://www.youtube.com/watch?v=-4fyyyQjsz8",
          Status: "Private",
          NumberFollowers: null,
          Comments: 0,
          Tag1: "Tag 1",
          Tag2: "Tag 2",
          Tag3: "Tag 3",
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
    await queryInterface.bulkDelete("IdeasData", null, {});
  },
};
