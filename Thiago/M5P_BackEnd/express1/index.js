const express = require('express')
const calculatorRoute = require('./routes/calculatorRoute');
const MealList = require('./routes/getMealListRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/calculator', calculatorRoute);
app.use('/meals', MealList);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})

