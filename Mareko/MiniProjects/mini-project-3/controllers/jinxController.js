"use strict";

const Models = require("../models");
const axios = require("axios");

const getJinxs = (res) => {
    Models.Jinx.findAll({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
};

const storeJinxs = () => {
    axios.get('https://wizard-world-api.herokuapp.com/spells')
    .then(data => {
        const spells = data.data.filter(spell => spell.type === "Jinx");
        const jinxSpells = spells.splice(0, 19);
        
        jinxSpells.forEach(jinx => {
            Models.Jinx.findOrCreate({
                where: {name: jinx.name},
                defaults: {
                    name: jinx.name,
                    incantation: jinx.incantation,
                    effect: jinx.effect
                }
            })
            .then(created => {created ? console.log('Jinx Spell data being added to the database...') : null })
            .catch(err => console.log(err))
        })

        // res.send({ result: 200, message: 'Jinx Spells data saved to database', data: jinxSpells})
    })
    .catch(err => console.log(err))
}


module.exports = {
    getJinxs, storeJinxs
}
