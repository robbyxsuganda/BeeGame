const { Game } = require("../models");

class PublicController {
  static async read(req, res, next) {
    try {
      const games = await Game.findAll();

      res.status(200).json({
        message: "Success Read Games",
        games,
      });
    } catch (error) {
      next(error);
    }
  }

  static async readByCategory(req, res, next) {
    try {
      const { CategoryId } = req.params;

      const CategoryGame = await Game.findAll({
        where: {
          CategoryId,
        },
      });

      if (!CategoryGame || CategoryGame.length === 0) {
        throw { name: "NotFound" };
      }
      res.status(200).json(CategoryGame);
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req, res, next) {
    try {
      const { id } = req.params;
      const game = await Game.findByPk(id);

      if (!game) {
        throw { name: "NotFound" };
      }

      res.status(200).json({
        message: "Success Read Game",
        game,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PublicController;
