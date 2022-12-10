const { createSharings, getSharingsBySharingsName, getSharingss, deleteSharings, updateSharingss} = require("./Sharings.controller");
const router = require("express").Router();

router.post("/",createSharings);
router.get("/", getSharingss);
router.get("/:Sharingsname", getSharingsBySharingsName);
router.patch("/", updateSharingss);
router.delete("/", deleteSharings);

module.exports = router;