require("dotenv").config();
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const userRouter = require('./api/users/user.router');
const ContentRouter = require('./api/Contents/Content.router');
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/Contents", ContentRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log("listening", process.env.APP_PORT);
})