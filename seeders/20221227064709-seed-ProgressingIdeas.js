'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ProgressingIdeas", [
      {
        ImgURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/1200px-Michelle_Obama_2013_official_portrait.jpg",
        IdeaName: "Meetings tracker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ImgURL:
          "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkyNzAwNTAyOTEwMjQ3OTY1/justin-trudeau-gettyimages-1242516020.jpg",
        IdeaName: "Money saving app",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ImgURL:
          "https://cdn.britannica.com/97/155297-050-E37867BF/Elizabeth-II-2007.jpg",
        IdeaName: "Food blogging",
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProgressingIdeas", null, {});
  }
};
