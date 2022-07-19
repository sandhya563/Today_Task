'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserHobbi = sequelize.define('UserHobbis', {
    // userID: DataTypes.INTEGER,
    hobbi: DataTypes.STRING
  }, {});
  UserHobbi.associate = function(models) {
    // associations can be defined here
    UserHobbi.belongsTo(models.User, {foreignKey: {name: 'userID',allowNull: false},as: 'UserHobbis'});
  };
  return UserHobbi;
};