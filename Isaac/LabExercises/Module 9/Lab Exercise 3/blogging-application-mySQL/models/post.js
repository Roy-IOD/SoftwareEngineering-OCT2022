const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class post extends Model {}

//Sequelize will create this table if it doesnt exist on startup

post.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    title: { type: DataTypes.STRING, allowNull: false, required: true },
    image: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING, allowNull: false },
    likes: { type: DataTypes.INTEGER },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "post",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = post;
