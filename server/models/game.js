"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.belongsTo(models.Category, { foreignKey: "CategoryId" });
    }
  }
  Game.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title required",
          },
          notEmpty: {
            msg: "Title required",
          },
        },
      },
      developer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Developer required",
          },
          notEmpty: {
            msg: "Developer required",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Image required",
          },
          notEmpty: {
            msg: "Image required",
          },
        },
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category required",
          },
          notEmpty: {
            msg: "Category required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
