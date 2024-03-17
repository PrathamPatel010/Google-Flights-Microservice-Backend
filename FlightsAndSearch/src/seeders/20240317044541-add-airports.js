'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: "Sardar Vallabhbhai Patel International Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indira Gandhi International Airport",
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mengaluru International Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysuru International Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhash Chandra Bose International Airport",
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
