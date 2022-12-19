const { createComment, getComments, getCommentByuser, getCommentById} = require("./Comment.controller");
const router = require("express").Router();

router.post("/",createComment);
router.get("/", getComments);
router.get("/author/:username", getCommentByuser);
router.get("/:ContentID", getCommentById);

module.exports = router;
