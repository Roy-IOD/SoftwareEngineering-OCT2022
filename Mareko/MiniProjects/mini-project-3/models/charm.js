const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Charm extends Model {}

Charm.init({
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
    sequelize: sequelizeInstance, modelName: 'charms', timestamps: true, freezeTableName: true
});

module.exports = Charm;