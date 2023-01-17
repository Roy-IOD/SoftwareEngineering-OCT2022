const testRoute = require('./routes/myTestRoute');
const calculatorRoute = require('./routes/calculatorRoute');
const express = require('express')
const app = express()
const port = 3000
app.use('/mytest', testRoute);
app.use('/', express.static('public'))


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/calculator', calculatorRoute);
app.get('/', (req, res) => {
res.send('Hello World!')
})
app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})


const app1 = express();
const app2 = express();

app1.listen(3002, () => {
  console.log("Hello i have started!");
});

app2.listen(3001, () => {
  console.log("I have also started");   
});

app.use('/', express.static('public'))

