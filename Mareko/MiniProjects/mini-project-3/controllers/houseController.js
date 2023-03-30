"use strict";

const Models = require("../models");
const axios = require("axios")

const getHouses = (res) => {
    Models.House.findAll({})
    .then( data => res.send({result: 200, data: data}))
    .catch(err => console.log(err))
}


const storeHouses = (req, res) => {
    axios.get('https://wizard-world-api.herokuapp.com/houses')
        .then(data => {
            let houseData = data.data.map(house => { 
                return {
                    name: house.name, 
                    animal: house.animal, 
                    headmaster: house.name === 'Hufflepuff' ? house.heads[1].firstName + ' ' + house.heads[1].lastName : house.heads[0].firstName + ' ' + house.heads[0].lastName,
                    commonRoom:  house.commonRoom
                }; 
            });

            houseData.forEach(house => {
                Models.House.findOrCreate({
                    where: {name: house.name},
                    defaults: {
                        name: house.name,
                        animal: house.animal, 
                        headmaster: house.headmaster,
                        commonRoom: house.commonRoom
                    }
                })
                .then(created => {created ? console.log('Data being added to the database...') : null })
                .catch(err => console.log(err))
            })

            res.send({ result: 200, message: 'House data saved to database', data: houseData})
        })
        .catch(err => console.log(err))
};


module.exports = {
    getHouses, storeHouses
}