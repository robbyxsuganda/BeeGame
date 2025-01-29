class CategoryController {
  static async read(req, res) {
    try {
      res.status(200).json({ message: "Category Controller" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
