const { User } = require("../models");

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });

      res.status(201).json({
        message: "Success Register User",
        user: {
          username: user.username,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
