const { compare } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
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

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) throw { name: "BadRequest" };

      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw { name: "LoginError" };
      }

      if (!compare(password, user.password)) throw { name: "LoginError" };

      const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const access_token = signToken(payload);

      res.status(200).json({
        access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
