const userHobbiData = require('../query/userHobbi');

// Creat account User account
  async function  createUserHobbiAccount (req, res){
    try {
        const body = req.body
        const obj = {
          userID: body.userID,
          hobbi: body.hobbi
        }
          // console.log(obj,"values");
          const userHobbiCollection = await userHobbiData.createUserHobbiAccount(obj)
          // console.log(userHobbiCollection);
          res.status(201).send(userHobbiCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  // For get all users data 
  async function  getAlluserHobbiData (req, res){
    try {
      const userHobbiCollection = await userHobbiData.getAllUserHobbi()
      console.log(userHobbiCollection);
      res.status(201).send(userHobbiCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  

module.exports = {createUserHobbiAccount, getAlluserHobbiData}
