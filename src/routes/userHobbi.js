const express = require("express");
const router = express.Router();
const userHobbiController = require("../controllers/userHobbi");

router.post("/api/userHobbiRegistration", userHobbiController.createUserHobbiAccount)

router.get('/api/getUserHobbiData', userHobbiController.getAlluserHobbiData)


module.exports = router
