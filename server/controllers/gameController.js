const { Game } = require("../models");

class GameController {
  static async create(req, res, next) {
    try {
      const { title, developer, image, CategoryId } = req.body;
      const game = await Game.create({ title, developer, image, CategoryId });
      res.status(201).json({ message: "Success Create Game", game });
    } catch (error) {
      next(error);
    }
  }

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

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, developer, image, CategoryId } = req.body;

      const game = await Game.findByPk(id);

      if (!game) {
        throw { name: "NotFound" };
      }

      await game.update({ title, developer, image, CategoryId });

      res.status(200).json({
        message: "Success Update Game",
        game,
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const game = await Game.findByPk(id);

      if (!game) {
        throw { name: "NotFound" };
      }

      game.destroy();

      res.status(200).json({
        message: "Success Delete Game",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateImage(req, res, next) {
    try {
      res.status(200).json({ message: "Game Controller" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GameController;
