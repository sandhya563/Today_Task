const User = require("../models/user");
// const 

createUserAccount = async function(obj) {
  // const mobilenumber = await db.Users.findOne({ where: {mobileNumber: obj.mobileNumber} });
  // console.log(mobilenumber, "data ");
  // if(!mobilenumber === obj.mobileNumber || mobilenumber === null){
    console.log(obj, "obj");
    let data = await User.create(obj);
    console.log(data, "Data");
    return data
  // }else{
  //   return ({error: true, message: "mobile number already exist"})
  // }
};
// Get all users
getAllUsers = async function(){
  let user = await db.Users.findAll();
  return user
}




module.exports = {getAllUsers, createUserAccount};
