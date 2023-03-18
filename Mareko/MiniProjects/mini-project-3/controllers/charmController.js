"use strict";

const Models = require("../models");
const axios = require("axios");

const getCharms = (res) => {
    Models.Charm.findAll({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
};

const storeCharms = (req, res) => {
    axios.get('https://wizard-world-api.herokuapp.com/spells')
    .then(data => {
        const spells = data.data.filter(spell => spell.type === "Charm");
        const charmSpells = spells.splice(0, 11);
        
        charmSpells.forEach(charm => {
            Models.Charm.findOrCreate({
                where: {name: charm.name},
                defaults: {
                    name: charm.name,
                    incantation: charm.incantation,
                    effect: charm.effect
                }
            })
            .then(created => {created ? console.log('Charm Spell data being added to the database...') : null})
            .catch(err => console.log(err))
        })

        res.send({ result: 200, message: 'Charm Spells data saved to database', data: charmSpells})
    })
    .catch(err => console.log(err))
    

}


module.exports = {
    getCharms, storeCharms
}
