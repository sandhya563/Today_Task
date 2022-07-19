// const userinfo = require('../models/userinfo');
const userData = require('../query/user');
const {user, userInfo,userhobbi} = ('../models')


// Creat account User account
  async function  createUserAccount (req, res){
    try {
      const body = req.body
      const obj = {
        firstName: body.firstName,
        lastName: body.lastName,
        mobileNumber: body.mobileNumber

      }
      const userCollection = await userData.createUserAccount(obj)
      // console.log("fgdtjfuyguihoi",userCollection)
      res.status(201).send(userCollection)
      
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  // For get all users data 
  async function  getAlluserData (req, res){
    try {
      const userCollection = await userData.getAllUsers()
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  // For get data by id
  // const getUserDataById = async function(req, res){
  //   let userid = req.params.id;
  //   console.log(userid);
  // try {
  //   const userdata = await userData.findUserDataById(userid)
  //   console.log(userdata);
  //   res.status(200).send(userdata)
  // }catch(e){
  //   console.log(e)
  //   res.status(500).send(e)
  // }
  // }
  function showAllUserData(req,res) {
    console.log(req.params.id, "gr ltmblt");
    user.findById(req.params.id, {
      include: [{
        model: userInfo,
        as: 'userinfo'
      }],
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
        }
  
        return res.status(200).json(user);
      })
      .catch((error) => {
        return res.status(400).json(error)
      });
  }

  // For update 
  function updateData(req,res) {
  user.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
      }

      return user.update({
          ...user, //spread out existing user
          ...req.body //spread out body - the differences in the body will over ride the user returned from DB.
        })
        .then((updatedUser) => {
          return res.status(200).json(updatedUser)
        })
        .catch((error) => {
          return res.status(400).json(error)
        });
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
}

// For delete

function deleteData(req,res) {
  user.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: 'User Not Found' });
      }
      return user.destroy()
        .then((user) => {
          return res.status(200).json(user)
        })
        .catch((error) => {
          return res.status(400).json(error)
        });
    })
    .catch((error) => {
      return res.status(400).json(error)
    });
  }

module.exports = {createUserAccount, getAlluserData, showAllUserData, updateData, deleteData}
