const { Category } = require("../models");

class CategoryController {
  static async read(req, res, next) {
    try {
      const categories = await Category.findAll();

      res.status(200).json({
        message: "Success Read Categories",
        categories,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
