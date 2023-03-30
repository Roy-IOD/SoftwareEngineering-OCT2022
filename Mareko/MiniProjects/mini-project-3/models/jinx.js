const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Jinx extends Model {}

Jinx.init({
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    incantation: {
        type: DataTypes.STRING, allowNull: false
    },
    effect: {
        type: DataTypes.STRING, allowNull: false
    }},

{
    sequelize: sequelizeInstance, modelName: 'jinxs', timestamps: true, freezeTableName: true
});

module.exports = Jinx;