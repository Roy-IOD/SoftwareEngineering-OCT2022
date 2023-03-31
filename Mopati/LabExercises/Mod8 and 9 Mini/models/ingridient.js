const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Ingridient extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Ingridient.init(
  {
    idIngridient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "ingridients", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Ingridient;
