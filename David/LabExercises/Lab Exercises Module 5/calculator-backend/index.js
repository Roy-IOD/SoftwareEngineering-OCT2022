const express = require('express')
const testRoute = require('./routes/myTestRoute');
const calculatorRoutes = require ('./routes/calculatorRoutes');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/mytest', testRoute);
app.use('/calculator', calculatorRoutes);


app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})