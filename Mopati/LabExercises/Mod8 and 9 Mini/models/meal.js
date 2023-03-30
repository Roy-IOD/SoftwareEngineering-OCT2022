const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Meal extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Meal.init(
  {
    idMeal: {
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
    area: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    instructions: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      required: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "meals", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Meal;
