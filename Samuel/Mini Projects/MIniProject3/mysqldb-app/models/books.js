const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Author = require("./author");

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
    // authorId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   required: true,
    //   references: {
    //     model: Author,
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "books",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Book;
