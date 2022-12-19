const { createComment, getComments, getCommentByuser, getCommentById,getCount} = require("./Comment.controller");
const router = require("express").Router();

router.post("/",createComment);
router.get("/", getComments);
router.get("/author/:username", getCommentByuser);
router.get("/:ContentID", getCommentById);
router.get("count/:Count", getCount);

module.exports = router;