const db = require("../models");
const users = db.users;
const userInfos = db.userInfos

createUserAccount = async function(obj) {
    var data = await db.Users.create(obj);
    // console.log(data, "Data");
    return data
};
// Get all users
getAllUsers = async function(){
  let user = await db.Users.findAll();
  return user
}


// For get data by id or user name
findUserDataById = async function(userId){
  console.log(userId, "idddddddddd");
  var usersData =  await db.Users.findOne({where: {id: userId}})
  console.log(usersData, "data");
  // }).then(function(userData) {
  //     if (!userData) {
  //       res.status(200).send(userData)
  //     }
  // }).cath(function(error){
  //   res.status(500).send(error)
  // });
}
// relation one to one
var oneToOne = async (req, res)=>{
  let data = await users.findAll({where: {id : 2}})
  res.status(200).json(data)
}

module.exports = {getAllUsers, createUserAccount,findUserDataById, oneToOne};
