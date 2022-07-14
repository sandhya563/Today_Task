const userData = require('../query/user');

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
      console.log("fgdtjfuyguihoi",userCollection)
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

module.exports = {createUserAccount, getAlluserData}
