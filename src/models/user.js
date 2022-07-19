const Sequelize = require("sequelize")
const Userinfo = require('../models/userinfo');
// import {Userinfo} from "../models/userinfo.model"
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobileNumber: DataTypes.BIGINT,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {})
    User.associate = (models) => {
      User.hasOne(models.Userinfo)
      // User.hasOne(Userinfo, {
      //   foreignKey: {
      //     name: 'userID',
      //     allowNull: false
      //   },
      //   as: 'UserInfo'
      // });
      // Userinfo.belongsTo(User, {
      //   foreignKey: {
      //     name: 'userID',
      //     allowNull: false
      //   },
      //   as: 'userinfo'
      // });
    };
  return User;
};