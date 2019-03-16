'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        defaultValue:"https://picsum.photos/200/300?image=0",
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      views: {
        defaultValue:0,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      orders: {
        defaultValue:0,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};