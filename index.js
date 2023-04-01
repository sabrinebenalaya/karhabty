const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv');
const carRoute = require('./route/carRoute')
const userRoute = require('./route/userRoute')
const orderRoute = require('./route/orderRoute')
const authRoute = require('./route/authRoute')

const connect = require("./ConnectDB/connectDB");

const app = express();
dotenv.config();
const port = process.env.PORT;

app.listen(port, (e) => {
  if (e) {
    console.log("server is failed");
  } else {
    console.log(`server is connected on port ${port}`);
  }
});


connect();
app.use(cors())
app.use(express.json());
app.use('/karhabty', authRoute);
app.use('/karhabtyCar', carRoute);
app.use('/karhabtyOrder', orderRoute);
app.use('/karhabtyUser', userRoute);

