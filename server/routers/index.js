const express = require("express");
const router = express.Router();
const cuisineRoute = require("./cuisine");
const categoryRoute = require("./category");
const Controller = require("../controllers/controller");
const AuthController = require("../controllers/authController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const errorHandler = require("../middlewares/errorHandler");

router.get("/pub", Controller.read); // buat customer dapetin data cuisine, datanya di batesin pake pagination
router.get("/pub/:id", Controller.readById);
router.post("/login", AuthController.login);

router.use(authentication);

router.post("/add-user", authorization, AuthController.addUser);

router.use("/cuisines", cuisineRoute); // entitas utama
router.use("/categories", categoryRoute); // entitas support

router.use(errorHandler);

module.exports = router;
