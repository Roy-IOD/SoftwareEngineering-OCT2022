const { DataTypes, Model } = require("sequelize");
const User = require("./user");

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
        type: DataTypes.STRING(1000), allowNull: false, required: true
    },
    imageURL: {
        type: DataTypes.STRING, allowNull: false, required: true
    }, 
    userId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
    
        references: {
            model: User, //reference to another model
            key: 'id', //column name of the referenced model
        }
    }},    
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Post;