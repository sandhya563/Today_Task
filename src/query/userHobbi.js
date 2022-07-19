const db = require("../models");

createUserHobbiAccount = async function(userHobbiObj) {
  console.log(userHobbiObj, "data userhobbi account");
    var data = await db.UserHobbis.create(userHobbiObj);
    console.log(data, "table data");
    return data
};
// Get all usersuserHobbiObj
getAllUserHobbi = async function(){
  let userHobbi = await db.UserHobbis.findAll();
  console.log(userHobbi);
  return userHobbi
}

module.exports = {getAllUserHobbi, createUserHobbiAccount};
