const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts",
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
