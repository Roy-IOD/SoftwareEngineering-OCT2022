const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express')
const spaceNewsRoute = require('./routes/spaceNewsRoute');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/spacenews', spaceNewsRoute)

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));