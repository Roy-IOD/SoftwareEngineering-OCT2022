const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Fantasy extends Model {}

Fantasy.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "fantasy",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Fantasy;
