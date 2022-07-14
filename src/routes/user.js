const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/api/userRegistration", userController.createUserAccount)

router.get('/api/getUserData', userController.getAlluserData)

// router.post('/api/login', userController.checkUserDetails)

// router.post('/api/otpVerifiy',userController.checkOtp)


module.exports = router
