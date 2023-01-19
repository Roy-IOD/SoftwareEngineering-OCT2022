//first run 'npm install axios'
const axios = require('axios');

const listMeals = (req, res) => {
    const searchFilter = (req.query.i)   

    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ searchFilter)
        .then(response => {
            console.log(response.data)
            //send a successful response including the JSON data
            res.status(200).json({success: true, ...response.data})
        })
        .catch(error => {
            //send an error response including error details as JSON data
            res.status(500).json({success: false, error: error.message})
        })
}

module.exports = {
    listMeals
}