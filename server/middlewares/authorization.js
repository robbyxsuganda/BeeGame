const { User, Cuisine } = require("../models");
const authorization = async (req, res, next) => {
  try {
    const { userId, role } = req.loginInfo;

    if (role === "Staff") {
      // throw { name: "Forbidden" };

      const user = await User.findByPk(userId);

      if (!user) throw { name: "Forbidden" };

      if (!req.params.id) throw { name: "Forbidden" };

      const { id } = req.params;

      const cuisine = await Cuisine.findByPk(id);

      if (!cuisine) throw { name: "NotFound" };

      if (cuisine.authorId !== userId) throw { name: "Forbidden" };
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
