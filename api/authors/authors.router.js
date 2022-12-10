const { createUser, getUserByUserName, getUsers, deleteUser, updateUsers} = require("./authors.controller");
const router = require("express").Router();

router.post("/",createUser);
router.get("/", getUsers);
router.get("/:nickname", getUserByUserName);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

module.exports = router;
