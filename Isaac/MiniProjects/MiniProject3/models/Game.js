const { DataTypes, Model } = require("sequelize");
const Team = require("./Team");

let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Game extends Model {}

Game.init(
  {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    ateam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: Team,
        key: "id",
      },
    },
    hteam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: Team,
        key: "id",
      },
    },
    ascore: { type: DataTypes.INTEGER },
    hscore: { type: DataTypes.INTEGER },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "games",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Game;
