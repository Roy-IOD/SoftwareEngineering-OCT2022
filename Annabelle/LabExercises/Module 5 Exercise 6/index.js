const express = require('express')
const dogsRoute = require ('./routes/dogsRoute.js')
const app = express()
const port = 3000
app.use('/dogs', dogsRoute);
app.use('/', express.static('public'))

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
