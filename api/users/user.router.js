const { createUser, getUserByUserName, getUsers, deleteUser, updateUsers} = require("./user.controller");
const router = require("express").Router();

router.post("/",createUser);
router.get("/", getUsers);
router.get("/:username", getUserByUserName);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

module.exports = router;