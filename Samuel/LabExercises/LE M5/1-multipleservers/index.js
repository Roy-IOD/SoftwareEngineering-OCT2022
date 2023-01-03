const express = require('express')
const app = express()
const app2 = express()
const app3 = express()
const port = 3010
const port2 = 3011
const port3 = 3012


//App 1 and 2
app.get('/', (req, res) => {
    res.send('Hello from Sam')
})

app2.get('/', (req, res) => {
    res.send('Hello this is App 2')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app2.listen(port2, () => {
    console.log(`Example app listening at http://localhost:${port2}`)
})

//App 3

app3.get('/', (req, res) => {
    res.send('Hello from App 3')
})

app3.listen(port3, () => {
    console.log(`Example app listening at http://localhost:${port3}`)
})