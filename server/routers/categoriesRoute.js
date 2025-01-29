const express = require("express");
const CategoryController = require("../controllers/categoryController");
const router = express.Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.read);
router.put("/:id", CategoryController.update);
router.delete("/:id", CategoryController.delete);

module.exports = router;
