const express = require("express");
const router = express.Router();
const GameController = require("../controllers/gameController");
const authorization = require("../middlewares/authorization");

router.post("/", authorization, GameController.create); // hanya admin yang bisa
router.get("/", GameController.read);
router.get("/:id", GameController.readOne);
router.put("/:id", authorization, GameController.update); // hanya admin yang bisa
router.delete("/:id", authorization, GameController.delete); // hanya admin yang bisa
router.patch("/:id", authorization, GameController.updateImage); // hanya admin yang bisa

module.exports = router;
