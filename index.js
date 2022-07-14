
const express = require('express');
const userRoutes = require('./src/routes/user')
const app = express();
app.use(express.json());

app.use("/usersData",userRoutes)

app.listen(3000, () => {
  console.log('server is runing on 3000 port')
});

