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
          UserName: "Jack Bauer",
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
          createdAt: "2020-08-16T23:00:33.010+02:00",
          updatedAt: new Date(),
        },
        {
          IdeaId: 1,
          UserId: 4,
          UserName: "Beyonce",
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
          createdAt: "2020-09-26T23:00:33.010+02:00",
          updatedAt: new Date(),
        },
        {
          IdeaId: 1,
          UserId: 3,
          UserName: "Justin Trudeau",
          IdeaProfileImgURL:
            "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          IdeaName: "Japanese Mexican Fusion restaurant",
          OneLiner:
            "A restaurant serving unique meals which combine the art of Japanese and Mexican cuisine",
          Descr:
            "My Japanese mum and Mexican dad have always been great cooks and have often tried to combine their recipes to create delicious new ones.",
          Purpose: "Share my parents' unique recipes with the world",
          Differentator:
            "Not the common JapMex food in Japan where Mexican food is modified for Japanese people's taste. My restaurant will combine them.",
          MainFeature: "Tacos sushi?",
          OtherFeature: "Spicy soba noodles",
          TargetAud: "People interested in trying unique foods",
          UsageReason: "Foodies!",
          ImgURL:
            "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          VideoURL: "https://www.youtube.com/watch?v=GtL1huin9EE",
          Status: "Live",
          NumberFollowers: 10,
          Comments: 0,
          Tag1: "Food",
          Tag2: "Fusion",
          Tag3: "International",
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: "2020-12-18T23:00:33.010+02:00",
          updatedAt: new Date(),
        },
        {
          IdeaId: 2,
          UserId: 4,
          UserName: "Beyonce",
          IdeaProfileImgURL:
            "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
          IdeaName: "Exercise Tracker App",
          OneLiner: "An all-in-one exercise tracker",
          Descr:
            "Doesn't just track typical exercises like running An app that tracks dancing, yoga and pilates as well.",
          Purpose: "An app to track all of my exercises",
          Differentator:
            "I don't have to use different apps to track different exercises.",
          MainFeature: "Easy to use",
          OtherFeature: "Accurate",
          TargetAud: "Dancers",
          UsageReason: "Convenience",
          ImgURL:
            "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          VideoURL: "https://www.youtube.com/watch?v=Ob7vObnFUJc",
          Status: "Live",
          NumberFollowers: 50,
          Comments: 0,
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
          createdAt: "2021-01-10T23:00:33.010+02:00",
          updatedAt: new Date(),
        },
        {
          IdeaId: 1,
          UserId: 1,
          UserName: "Michelle Obama",
          IdeaProfileImgURL:
            "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
          IdeaName: "Food Blogging App",
          OneLiner: "Like instagram but only for food",
          Descr: "I only want to see food pics.",
          Purpose: "An app for people to see and view food pics only",
          Differentator:
            "It will not have any other photos. Even ads will be related to food and only food.",
          MainFeature: "Food pictures gallery",
          OtherFeature: "Recipe sharing?",
          TargetAud: "Foodies",
          UsageReason: "Specialised, concentrated",
          ImgURL:
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
          VideoURL: null,
          Status: "Private",
          NumberFollowers: 3,
          Comments: 0,
          Tag1: "Food",
          Tag2: "Technology",
          Tag3: null,
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: "2021-02-16T23:00:33.010+02:00",
          updatedAt: new Date(),
        },
        {
          IdeaId: 1,
          UserId: 6,
          UserName: "Chuck Norris",
          IdeaProfileImgURL:
            "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
          IdeaName: "American healthy food importing",
          OneLiner: "Bringing in top of the line healthy food from America",
          Descr:
            "America has a big range of healthy food products which is not often seen outside of the US and they are very good products. People around should be able to access to such great products outside of US.",
          Purpose: "Providing access to quality healthy food",
          Differentator:
            "Top of the line food processing capability and farming in US and some of these food is able to provide better health benefits than other healthy food in the market. Food safety will also be a key here",
          MainFeature: "Food Safety",
          OtherFeature: "Healthy",
          TargetAud:
            "Individuals who enjoys healthy and clean food and patients who can only consume healthy food",
          UsageReason: "Health purposes",
          ImgURL:
            "https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
          VideoURL: "https://www.youtube.com/watch?v=GtL1huin9EE",
          Status: "Live",
          NumberFollowers: 10,
          Comments: 0,
          Tag1: "Healthy Food",
          Tag2: "Health",
          Tag3: "Importing",
          Tag4: null,
          Tag5: null,
          Tag6: null,
          Tag7: null,
          Tag8: null,
          Tag9: null,
          Tag10: null,
          createdAt: "2021-10-16T23:00:33.010+02:00",
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
