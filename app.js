require("dotenv").config();
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const userRouter = require('./api/users/user.router');
const ContentRouter = require('./api/Contents/Content.router');
const CategoryRouter = require('./api/Categories/categories.router');
const LikeRouter = require('./api/Likes/Likes.router');
const CommentRouter = require('./api/Comment/Comment.router');
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/Contents", ContentRouter);
app.use("/api/Categories", CategoryRouter);
app.use("/api/Likes", LikeRouter);
app.use("/api/Comment", CommentRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("listening", process.env.APP_PORT);
})
