'use strict';
module.exports = (sequelize, DataTypes) => {
  let Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },

    image_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    contact_info: {
      type: DataTypes.JSON,
      allowNull: true,
    },

    meals: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Restaurant;
};