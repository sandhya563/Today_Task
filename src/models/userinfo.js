'use strict';
const Sequelize = require('sequelize');
const userhobbi = require('../models/userhobbi')
const user = require('../models/user')
module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('UserInfos', {
    name: {type:DataTypes.STRING},
    address: {type:DataTypes.STRING,},
    email: {type:DataTypes.STRING}
  }, {});
  UserInfo.associate = (models) => {
    // associations can be defined here
    

    
    
  };


  return UserInfo;
};