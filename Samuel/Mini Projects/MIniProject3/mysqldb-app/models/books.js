const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "books",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Book;
