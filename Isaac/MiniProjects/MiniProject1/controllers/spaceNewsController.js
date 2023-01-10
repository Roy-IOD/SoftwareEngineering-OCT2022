//first run 'npm install axios'
const axios = require('axios');


const addSpaceNews = (req, res) => {
   
    axios.get('https://api.spaceflightnewsapi.net/v3/reports')
        .then((response) => {
           console.log(response.data)
           res.status(500).json({success: true, ...response.data})
        })}
    

module.exports = {
   addSpaceNews
}