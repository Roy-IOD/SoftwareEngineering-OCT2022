const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false, required: true },
    debut: { type: DataTypes.INTEGER },
    abbrev: { type: DataTypes.STRING },
    logo: { type: DataTypes.BLOB },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "teams",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Team;
