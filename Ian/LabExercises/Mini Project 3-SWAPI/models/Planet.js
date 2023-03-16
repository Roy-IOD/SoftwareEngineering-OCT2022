const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Planet extends Model {}

Planet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },

        name: { type: DataTypes.STRING },
        population: { type: DataTypes.STRING },
        rotationPeriod: { type: DataTypes.INTEGER },
        orbitalPeriod: { type: DataTypes.INTEGER },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "planets",
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = Planet;