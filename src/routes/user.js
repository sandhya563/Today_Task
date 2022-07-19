const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const userQueryData = require("../query/user")

router.post("/api/userRegistration", userController.createUserAccount)

router.get('/api/getAllUserData', userController.getAlluserData)

router.get('/api/getUserDataById/:id', userController.showAllUserData)

router.put('./api/userUpdate', userController.updateData)

router.delete('/api/deleteUserDataById/:id', userController.deleteData)

module.exports = router
