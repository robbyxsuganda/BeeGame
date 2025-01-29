"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const games = [
      {
        title: "Mobile Legends",
        developer: "Moonton",
        image: "https://yt3.googleusercontent.com/naOY_2iC824ZRwqpoPXcvXy7qZOU-BD1AQhog4MF6veLxScaBC2glExHMtIWryX5fhx8q2Y81MA=s900-c-k-c0x00ffffff-no-rj",
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "PUBG Mobile",
        developer: "Tencent",
        image: "https://cdn6.aptoide.com/imgs/e/b/e/ebe4c3a3d00e00e9b26d18fcde77a3b6_icon.png",
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Free Fire",
        developer: "Garena",
        image: "https://i.pinimg.com/736x/30/1a/c5/301ac5586bad7635b3ecfd7e6ab6a934.jpg",
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Point Blank",
        developer: "Zepetto",
        image: "https://play-lh.googleusercontent.com/IGOlY-TMU0cGW_I8EFKBkLACxPLu1TQqbqaqx7NUsGMyjNWIO1NdhwdBrq-71pUAHw",
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Valorant",
        developer: "Riot Games",
        image: "https://i.pinimg.com/736x/b7/cf/62/b7cf62846ae6ae5e96b35cf9d5e05a7c.jpg",
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Games", games, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Games", null, {});
  },
};
