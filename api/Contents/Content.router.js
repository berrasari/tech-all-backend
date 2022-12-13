const { create, getContentsByTopic, getContents, deleteContents, updateContents} = require("./Content.controller");
const router = require("express").Router();

router.post("/",create);
router.get("/", getContents);
router.get("/:ContentID", getContentsByTopic);
router.patch("/", updateContents);
router.delete("/", deleteContents);

module.exports = router;