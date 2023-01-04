//first run 'npm install axios'
const axios = require('axios');

const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {

    //we can do all kinds of things within our back end, such as calling another API.
    //fetch can be used in the browser, but the axios module is more common in backend apps
    //see https://axios-http.com/docs/example
    
    axios.get('https://catfact.ninja/fact') //gets a single random cat fact
        .then(response => {
            console.log(response.data)
            //send a successful response including the JSON data
            res.status(200).json({success: true, ...response.data})
        })
        .catch(error => {
            //send an error response including error details as JSON data
            res.status(500).json({success: false, error: error.message})
        })
})


router.get('/list', (req, res) => {

    //wrapping our own backend around someone else's lets us do things like caching 
    //or modifying the returned JSON to suit our needs

    let limit = req.query.limit ? req.query.limit : 10 //sets a default of 10 unless provided in the request
    let page = req.query.page ? req.query.page : 1 //sets a default of 1 unless provided in the request
    
    axios.get('https://catfact.ninja/facts?limit='+limit+'&page='+page) //gets a list of random cat facts
        .then(response => {
            console.log(response.data)
            //send a successful response including the JSON data
            res.status(200).json({success: true, facts: response.data.data, next_page: response.data.next_page_url})
        })
        .catch(error => {
            //send an error response including error details as JSON data
            res.status(500).json({success: false, message: error.message})
        })
})


module.exports = router;