let express = require('express');
let router = express.Router();

router.get('/test', (req, res) => {
 res.send('Hello World!')
})

router.get('/test2', (req, res) => {
 res.send('Second test')
})
module.exports = router;