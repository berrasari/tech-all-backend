const { createContent, getContents, getContentByAuthor} = require("./Content.controller");
const router = require("express").Router();

router.post("/",createContent);
router.get("/", getContents);
router.get("/:userid", getContentByAuthor);


module.exports = router;