const express = require("express");
const router = express.Router();
const PubController = require("../controllers/pubController");
const AuthController = require("../controllers/authController");
const gamesRoute = require("./gamesRoute");
const categoryRoute = require("./categoriesRoute");
const authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");
const upload = require("../utils/multer");
const Controller = require("../controllers/controller");

router.get("/pub", PubController.read);
router.get("/pub/:id", PubController.readOne);
router.get("/pub/games/:CategoryId", PubController.readByCategory);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/google-login", AuthController.googleLogin);

router.get("/vouchers", PubController.readVouchers);

router.get("/ai", PubController.generateAI);

router.use(authentication);

router.get("/payment", Controller.readOrders);
router.get("/payment/midtrans", Controller.midtransToken);
router.patch("/payment/status", Controller.updateOrderStatus);

router.get("/profile", AuthController.readProfile);
router.patch("/change-profile/:id", upload.single("file"), AuthController.changeProfile);

router.use("/games", gamesRoute); // entitas utama
router.use("/categories", categoryRoute); // entitas support

router.use(errorHandler);

module.exports = router;
