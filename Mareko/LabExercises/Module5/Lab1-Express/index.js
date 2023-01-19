const express = require('express')
const app1 = express()
const app2 = express()
const app3 = express()
const port1 = 3000
const port2 = 8080
const port3 = 3001

app1.get('/test', (req, res) => {
    res.status(200).send('Hello World!')
})

app1.listen(port1, () => {
    console.log(`The new port is http://localhost:${port1}/test`)
})

app2.get('/', (req, res) => {
    res.send('Hello World again!')
})

app2.listen(port2, () => {
    console.log(`This is the second port access point and you can find it at http://localhost:${port2}`)
})

app3.get('/', (req, res) => {
    res.send('Hello World for a third time!')
})

app3.listen(port3, () => {
    console.log(`The third port can be found at http://localhost:${port3}`)
})