const { createLike, getLikes, getLikeById ,updateLikes} = require("./Likes.controller");
const router = require("express").Router();

router.post("/", createLike);
router.get("/", getLikes);

router.get("/:ContentID", getLikeById);




module.exports = router;