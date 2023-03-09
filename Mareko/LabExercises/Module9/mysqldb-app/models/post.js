const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Post.init({
    postID: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    userID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    description: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    imageURL: {
        type: DataTypes.STRING, allowNull: true, required: false,
    }}, 
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Post;