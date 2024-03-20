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
        name: "Indira Gandhi International Airport",
        address: "New Delhi, Delhi 110037",
        cityId: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kempegowda International Airport",
        address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300",
        cityId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mengaluru International Airport",
        address: "Bajpe Main Rd, Kenjar HC, Mangaluru, Karnataka 574142",
        cityId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mysuru International Airport",
        address: "Kozhikode-Mysore-Kollegal Hwy, Mysuru, Karnataka 571311",
        cityId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Netaji Subhash Chandra Bose International Airport",
        address: "Airport Service Rd, International Airport, Dum Dum, Kolkata, West Bengal 700052",
        cityId: 41,
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
