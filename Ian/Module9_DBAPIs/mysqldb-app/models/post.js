const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    description: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    image: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    likes: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    userId: {
        type: DataTypes.STRING, allowNull: false, required: true
    }}, 
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Post;