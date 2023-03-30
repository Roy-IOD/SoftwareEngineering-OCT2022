const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class House extends Model { }

House.init({
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
      },
      name: {
        type: DataTypes.STRING, allowNull: false
      },
      animal: {
        type: DataTypes.STRING, allowNull: false
      },
      headmaster: {
        type: DataTypes.STRING, allowNull: false
      },
      commonRoom: {
        type: DataTypes.STRING, allowNull: false
      }},

      {
        sequelize: sequelizeInstance, modelName: 'houses', //use lowercase plural format
        timestamps: true, freezeTableName: true
});

module.exports = House;