const express = require('express')
// const testRoutes = require('./routes/myTestRoute');
// const helloRoutes = require('routes/hello');
const calculatorRoutes = require('./routes/calculatorRoutes');
const app = express()

const port = 3000

app.use('/calculator', calculatorRoutes)

app.use('/', express.static('public')) 
// app1.use('/mytest', myTestRoute) 



app.get('/hello', (req, res) => {
    res.send("Hello World!")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

