//first run 'npm install axios'
const axios = require('axios');
const {CatFact, CatFactsCache} = require('../models/CatFact')

const randomFact = (req, res) => {
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
            res.status(500).json({success: false, message: error.message})
        })
}

const listFacts = (req, res) => {
   //wrapping our own backend around someone else's lets us do things like caching 
    //or modifying the returned JSON to suit our needs

    let limit = req.query.limit ? req.query.limit : 10 //sets a default of 10 unless provided in the request
    let page = req.query.page ? req.query.page : 1 //sets a default of 1 unless provided in the request
    let offset = (page - 1) * limit; //the offset takes into account which page we're on and how many items per page
    
    axios.get('https://catfact.ninja/facts?limit='+limit+'&page='+page) //gets a list of random cat facts
        .then(response => {
            //console.log(response.data)
            const facts = response.data.data;
            
            //add each new fact to the cache based on the id
            facts.forEach((fact, index) => { //index can be used in foreach to keep track of which array element we're iterating over
                let id = index + 1 + offset; //calculate a unique ID based on which page and the index (which starts at zero)
                fact.id = id //add the ID to the object so it's sent back in the JSON
                CatFactsCache.set(id, new CatFact(id, fact.fact, fact.length))
            })

            //send a successful response including the JSON data
            res.status(200).json({success: true, facts: facts, next_page: response.data.next_page_url})
        })
        .catch(error => {
            //send an error response including error details as JSON data
            console.log(error)
            res.status(500).json({success: false, message: error.message})
        })    
}

const getFact = (req, res) => {
    console.log(req.params) //anything after the /fact/ in the path will be stored in a param called id

    //need to parse the ID param to an int, since our cache map uses integer keys
    let catfact = CatFactsCache.get(parseInt(req.params.id))
    console.log(catfact);

    if (catfact) {
        res.status(200).json({success: true, ...catfact})
    } else {
        res.status(404).json({success: false, message: 'Cat fact #'+req.params.id+' not found in cache'})
    }
}

module.exports = {
    randomFact,
    listFacts,
    getFact
}