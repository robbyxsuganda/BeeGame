const { Op } = require("sequelize");
const gemini = require("../helpers/gemini");
const { Game, Category, Voucher } = require("../models");

class PublicController {
  static async read(req, res, next) {
    try {
      const { search } = req.query;

      let queryOption = {
        include: Category,
      };

      //SEARCH
      // endpoint?search=keyword
      if (search !== " " && typeof search !== "undefined") {
        queryOption.where = {
          title: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      const games = await Game.findAll(queryOption);

      res.status(200).json({
        message: "Success Read Games",
        games,
      });
    } catch (error) {
      console.log(error);

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

  static async readVouchers(req, res, next) {
    try {
      const vouchers = await Voucher.findAll();
      res.status(200).json(vouchers);
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

      res.status(200).json(game);
    } catch (error) {
      next(error);
    }
  }

  static async generateAI(req, res, next) {
    try {
      const prompt = `Give me the 6 most popular games PC and Mobile right now. Response must be a format JSON like this 
      [
        {
          title: ....,
          developer: ....,
          image: image url active,
          category: PC or Mobile choose one,
        }
      ]
      . Create without \`\`\` json and \`\`\``;
      const result = await gemini(prompt);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);

      next(error);
    }
  }
}

module.exports = PublicController;
