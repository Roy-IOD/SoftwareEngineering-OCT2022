let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    console.log('get request api')
Controllers.apiController.getApis(res);
})

router.post('/create', (req, res) => {
    console.log('post request api')
Controllers.apiController.createApi(req.body, res)
})
module.exports = router;