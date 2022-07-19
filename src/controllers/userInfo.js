const userInfoData = require('../query/userInfo');
const {user, userInfo,userhobbi} = ('../models')
// Creat account User account
  async function  createUserInfoAccount (req, res){
    try {
        const body = req.body
        console.log(req.body, "QQQQQQQQQQQ");
      const userInfoObj = {
        name: body.name,
        userID: body.userID,
        address: body.address,
        email: body.email
      }
      console.log(body, "2222");
      console.log(userInfoObj, "jhvuggiuh");
      const userInfoCollection = await userInfoData.createUserInfoAccount(userInfoObj)
      // console.log("faddressgdtjfuyguihoi",userCollection)
      res.status(201).send(userInfoCollection)
      
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  // For get all users data 
  async function  getAlluserInfoData (req, res){
    try {
      const userInfoCollection = await userInfoData.getAllUserInfo ()
      res.status(201).send(userInfoCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  // For get data by id 
  function getDataById(req,res) {
    userInfo.findById(req.params.id)
      .then((userInfo) => {
        if (!userInfo) {
          return res.status(404).json({ message: 'userInfo Not Found' });
        }
  
        return res.status(200).json(passport);
      })
      .catch((error) => {
        return res.status(400).json(error)
      });
  }
  
  //  For update data
  function updateData(req,res) {
    userInfo.findById(req.params.id)
      .then((userInfo) => {
        if (!userInfo) {
          return res.status(404).json({ message: 'userInfo Not Found' });
        }
  
        userInfo.update({
          ...userInfo, //spread out existing passport
          ...req.body //spread out req.body - the differences in the body will override the passport returned from DB.
        })
        .then((updateduserInfo) => {
          return res.status(200).json(updateduserInfo)
        })
        .catch((error) => {
          return res.status(400).json(error)
        });
      })
      .catch((error) => {
        return res.status(400).json(error)
      });
  }

  // Delete data
  function deleteData(req,res) {
    userInfo.findById(req.params.id)
      .then((userInfo) => {
        if (!userInfo) {
          return res.status(400).json({ message: 'userInfo Not Found' });
        }
        userInfo.destroy()
          .then((userInfo) => {
            return res.status(200).json(userInfo)
          })
          .catch((error) => {
            return res.status(400).json(error)
          });
      })
      .catch((error) => {
        return res.status(400).json(error)
      });
  }
module.exports = {createUserInfoAccount, getAlluserInfoData, getDataById, updateData, deleteData}
