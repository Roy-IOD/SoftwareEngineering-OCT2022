const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express')
const calculatorRoute = require('./routes/calculatorRoute');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/calculator', calculatorRoute)

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));