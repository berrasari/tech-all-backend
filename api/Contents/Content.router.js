const { createContent, getContents, getContentByAuthor, getContentById} = require("./Content.controller");
const router = require("express").Router();

router.post("/",createContent);
router.get("/", getContents);
router.get("/:username", getContentByAuthor);
router.get("/detay/:ContentID", getContentById);


module.exports = router;