const axios = require('axios')

const loadDogs = (req,res) => {
    axios.get('https://api.thedogapi.com/v1/breeds')
    .then((response) => {
        console.log(response.data)
        res.status(200).json({success: true, dogs: response.data})
        })
};

module.exports = {loadDogs}