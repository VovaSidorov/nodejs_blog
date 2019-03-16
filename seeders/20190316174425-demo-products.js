'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert(
        'Products',
        [... new Array(30)].map(el => {
          return {
            price: faker.commerce.price(),
            title: faker.commerce.productName(),
            description: faker.lorem.words(),
            image: faker.random.image(),
            amount: faker.random.number(),
            views: faker.random.number(),
            orders: faker.random.number(),


            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
          }
        }),
        {});

  },

  down: (queryInterface, Sequelize) => {

      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.bulkDelete('Products', null, {});

  }
};
