const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Ingridient = require("./ingridient");
const Meal = require("./meal");

const sequelizeInstance = dbConnect.Sequelize;

class MealIngredient extends Model {}

//Sequelize will create this table if it doesn't exist on startup
MealIngredient.init(
  {
    idMealIngredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idIngredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      //references: {
      // model: Ingridient, //reference to another model
      // key: "idIngridient", //column name of the referenced model
      // },
    },
    idMeal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: Meal, //reference to another model
        key: "idMeal", //column name of the referenced model
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "mealIngredients", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = MealIngredient;
