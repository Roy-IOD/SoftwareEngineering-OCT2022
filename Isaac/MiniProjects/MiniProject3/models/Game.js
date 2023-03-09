const { DataTypes, Model } = require("sequelize");
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
    ateam: { type: DataTypes.STRING },
    hteam: { type: DataTypes.STRING },
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
