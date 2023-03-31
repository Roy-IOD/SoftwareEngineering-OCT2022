const { DataTypes, Model } = require('sequelize');
let dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Film extends Model {}

Film.init(
    {
        episodeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        // characters: { type: DataTypes.ARRAY },
        // planets: { type: DataTypes.ARRAY },
        title: { type: DataTypes.STRING },
        openingCrawl: { type: DataTypes.STRING(900) },
        releaseDate: { type: DataTypes.DATEONLY },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "films",
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = Film;