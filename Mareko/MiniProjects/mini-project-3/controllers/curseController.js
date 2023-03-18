"use strict";

const Models = require("../models");
const axios = require("axios");

const getCurses = (res) => {
    Models.Curse.findAll({})
    .then(data => res.send({result: 200, data: data}))
    .catch(err => { console.log(err); res.send({result: 500, error: err.message})})
};

const storeCurses = (req, res) => {
    axios.get('https://wizard-world-api.herokuapp.com/spells')
    .then(data => {
        const spells = data.data.filter(spell => spell.type === "Curse");
        const curseSpells = spells.splice(0, 16);
        
        curseSpells.forEach(curse => {
            Models.Curse.findOrCreate({
                where: {name: curse.name},
                defaults: {
                    name: curse.name,
                    incantation: curse.incantation,
                    effect: curse.effect
                }
            })
            .then(created => {created ? console.log('Curse Spell data being added to the database...') : null })
            .catch(err => console.log(err))
        })

        res.send({ result: 200, message: 'Curse Spells data saved to database', data: curseSpells})
    })
    .catch(err => console.log(err))
    

}


module.exports = {
    getCurses, storeCurses
}
