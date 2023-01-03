const express = require('express')
const testRoute = require("./myTestRoute");
const app1 = express()
const app2 = express()
const port1 = 3000
const port2 = 8080

app1.use('/', express.static('public')) //it kept autocompleting to app1.use rather than app.use

app1.use('/mytest', myTestRoute) //it kept autocompleting to app1.use rather than app.use

app1.get('/hello', (req, res) => {
    res.send("Hello World 1!")
})

app2.get('/hello', (req, res) => {
    res.send('Hello World 2!')
})

app1.listen(port1, () => {
    console.log(`Example app listening at http://localhost:${port1}`)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
})
