const { createContent, getContents, getContentByAuthor, getContentById} = require("./Content.controller");
const router = require("express").Router();

router.post("/",createContent);
router.get("/", getContents);
router.get("/author/:username", getContentByAuthor);
router.get("/:ContentID", getContentById);


module.exports = router;