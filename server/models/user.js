'use strict';
module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail:{args:true,msg:'email format is invalid'},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
        len:{args:[5,100],msg:'Password is too short - make sure it is at least 5 characters'},
      }
    },
    has_admin_power: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};