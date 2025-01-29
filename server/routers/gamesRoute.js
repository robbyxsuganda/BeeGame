const express = require("express");
const router = express.Router();
const GameContoller = require("../controllers/GameContoller");
const authorization = require("../middlewares/authorization");

router.post("/", GameContoller.create);
router.get("/", GameContoller.read);
router.get("/:id", GameContoller.readById);
router.put("/:id", authorization, GameContoller.update);
router.delete("/:id", authorization, GameContoller.delete);
router.patch("/:id", authorization, GameContoller.updateImage);

module.exports = router;
