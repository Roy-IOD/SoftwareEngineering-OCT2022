const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Student extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Student.init({
    studentID: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    lastName: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    houseID: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    charmID: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    curseID: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    jinxID: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    }}, 
    {
        sequelize: sequelizeInstance, modelName: 'students', //use lowercase plural format
        timestamps: true, freezeTableName: true
    }
)
module.exports = Student;