const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Standing extends Model {}

Standing.init(
  {
    rank: { type: DataTypes.INTEGER, allowNull: false, required: true },
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    pts: { type: DataTypes.INTEGER },
    percentage: { type: DataTypes.INTEGER },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "standings",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Standing;
