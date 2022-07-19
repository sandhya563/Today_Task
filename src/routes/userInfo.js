const express = require("express");
const router = express.Router();
const userInfoController = require("../controllers/userInfo");

router.post("/api/userInfoRegistration", userInfoController.createUserInfoAccount)

router.get('/api/getUserInfoData', userInfoController.getAlluserInfoData)

router.get('/api/getUserInfoDataById', userInfoController.getDataById)

router.put('/api/getUpdateUserInfoData', userInfoController.updateData)

 router.delete('/api/deleteUserInfoData', userInfoController.deleteData)






module.exports = router
