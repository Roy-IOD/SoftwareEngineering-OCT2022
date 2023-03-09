const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    comment: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    postId: {
        type: DataTypes.STRING, allowNull: false, required: true
    }}, 
    {
        sequelize: sequelizeInstance, modelName: 'comments', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Comment;