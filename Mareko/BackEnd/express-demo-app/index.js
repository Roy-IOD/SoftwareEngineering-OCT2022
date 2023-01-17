const express = require('express')
const testRoute = require('./routes/myTestRoute');
const calculatorRoutes = require('./routes/calculatorRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000

app.use('/', express.static('public'))

// app.use('/mytest', testRoute)
app.use('/calculator', calculatorRoutes)

app.listen(port, () => {
    console.log(`This one is linked to public - http://localhost:${port}`)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))