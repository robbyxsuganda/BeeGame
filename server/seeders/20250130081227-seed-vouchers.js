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

    const vouchers = [
      {
        name: "Voucher1",
        price: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voucher2",
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voucher3",
        price: 25000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voucher4",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voucher5",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voucher6",
        price: 1000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Vouchers", vouchers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Vouchers", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
