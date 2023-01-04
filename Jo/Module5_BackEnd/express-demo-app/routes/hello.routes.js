let express = require('express');
let router = express.Router();

router.get('/hello', (req, res) => {
    //console.log(req)
    console.log(req.query)

    let temp = 'temp' //add a breakpoint here to watch the debugger in action. use the 'Step Over' option
    let name = req.query.name ? req.query.name : 'World'
    console.log(name)
    console.log('GET request for /hello with '+Object.keys(req.query).length+' query params')
    temp = 'new'
    res.status(200).send('Hello '+name+'!') //function chaining to set the status code AND send a response
})

module.exports = router;