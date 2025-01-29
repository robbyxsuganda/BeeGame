const express = require("express");
const router = express.Router();
const GameController = require("../controllers/gameController");

router.post("/", GameController.create); // hanya admin yang bisa
router.get("/", GameController.read);
router.get("/:id", GameController.readOne);
router.put("/:id", GameController.update); // hanya admin yang bisa
router.delete("/:id", GameController.delete); // hanya admin yang bisa
router.patch("/:id", GameController.updateImage); // hanya admin yang bisa

module.exports = router;
