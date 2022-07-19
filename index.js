
const express = require('express');
const userRoutes = require('./src/routes/user')
const userInfoRoutes = require('./src/routes/userInfo')
const userHobbiRoutes = require('./src/routes/userHobbi')
const db = require('./src/models')
const app = express();

app.use(express.json());
db.sequelize.sync()

app.use("/usersData", userRoutes)
app.use("/usersInfoData", userInfoRoutes)
app.use("/usersHobbiData", userHobbiRoutes)


app.listen(3000, () => {
  console.log('server is runing on 3000 port')
});

