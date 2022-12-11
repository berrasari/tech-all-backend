const { createCategory, getCategoriesByCategoryName, getCategories, deleteCategory, updateCategory} = require("./categories.controller");
const router = require("express").Router();

router.post("/",createCategory);
router.get("/", getCategories);
router.get("/:CategoryName", getCategoriesByCategoryName);
router.patch("/", updateCategory);
router.delete("/", deleteCategory);

module.exports = router;