'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    image_url: {
      type: Sequelize.TEXT,
      allowNull: true,
    },

    address: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    contact_info: {
      type: Sequelize.JSON,
      allowNull: true,
    },

    meals: {
      type: Sequelize.JSON,
      allowNull: false,
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
    return queryInterface.dropTable('Restaurants');
  }
};