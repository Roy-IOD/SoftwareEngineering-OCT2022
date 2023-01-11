const axios = require('axios');


const addSpaceNews = (req, res) => {
   
    axios.get('https://api.spaceflightnewsapi.net/v3/reports')
        .then((response) => {
           res.status(500).json({success: true, news: response.data})
        })}
    

module.exports = {
   addSpaceNews
}