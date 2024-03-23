'use strict';
const bcrypt = require('bcrypt');
const {SALT} = require('../config/serverConfig');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len:[8,100],
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(async function hashPassword(user){
    user.password = await bcrypt.hash(user.password,Number.parseInt(SALT));
  });
  return User;
};