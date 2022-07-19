const db = require("../models");

createUserInfoAccount = async function(obj) {
    console.log("start",obj, "end");
    // console.log(body, "vcxvjvdj");
    var data = await db.UserInfos.create(obj);
    return data
};
// Get all users
getAllUserInfo = async function(){
  let userInfo = await db.UserInfos.findAll();
  console.log(userInfo);
  return userInfo
}


module.exports = {getAllUserInfo, createUserInfoAccount};