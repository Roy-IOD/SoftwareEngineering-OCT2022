const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Author extends Model {}

Author.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
    },
    birth_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      require: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "author",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Author;
