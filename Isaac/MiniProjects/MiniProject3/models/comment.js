const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class comment extends Model {}

//Sequelize will create this table if it doesnt exist on startup

comment.init(
  {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      autoIncrement: true,
    },
    content: { type: DataTypes.STRING },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comment",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = comment;
