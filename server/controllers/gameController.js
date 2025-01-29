class GameController {
  static async create(req, res, next) {
    try {
      res.status(201).json({ message: "Game Controller" });
    } catch (error) {
      next(error);
    }
  }

  static async read(req, res, next) {
    try {
      res.status(200).json({ message: "Game Controller" });
    } catch (error) {
      next(error);
    }
  }

  static async readOne(req, res, next) {
    try {
      res.status(200).json({ message: "Game Controller" });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      res.status(200).json({ message: "Game Controller" });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      res.status(200).json({ message: "Game Controller" });
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
