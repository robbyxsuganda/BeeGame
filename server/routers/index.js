const express = require("express");
const router = express.Router();
const PubController = require("../controllers/pubController");
const AuthController = require("../controllers/AuthController");
const errorHandler = require("../middlewares/errorHandler");
// const categoryRoute = require("./categoriesRoute");
// const gamesRoute = require("./gamesRoute");

router.get("/pub", PubController.read);
router.get("/pub/:id", PubController.readOne);
router.post("/register", AuthController.register);
// router.post("/login");

// router.use("/games", gamesRoute); // entitas utama
// router.use("/categories", categoryRoute); // entitas support

router.use(errorHandler);

module.exports = router;
