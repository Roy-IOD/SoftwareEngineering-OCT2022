
const express = require('express')
const testRoute = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calculatorRoute');
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


app.use('/', express.static('public'))

app.use('/mytest', testRoute)

app.use('/calculator', calculatorRoute)

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})


