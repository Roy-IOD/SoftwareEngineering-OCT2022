const express = require('express')

const app1 = express()
const app2 = express()
const app3 = express()
const app4 = express()
const app5 = express()


const port1 = 1000
const port2 = 2000
const port3 = 3000
const port4 = 4000
const port5 = 5000



//App 1
app1.get('/', (req, res) => {
      res.send('Hello World 1!')
})

app1.listen(port1, () => {
      console.log(`Example app 1 listening at http://localhost:${port1}`)
})

//App 2
app2.get('/', (req, res) => {
      res.send('Hello World 2!')
})

app2.listen(port2, () => {
      console.log(`Example app 2 listening at http://localhost:${port2}`)
})

//App 3
app3.get('/', (req, res) => {
      res.send('Hello World 3!')
})

app3.listen(port3, () => {
      console.log(`Example app 3 listening at http://localhost:${port3}`)
})

//App 4
app4.get('/', (req, res) => {
      res.send('Hello World 4!')
})

app4.listen(port4, () => {
      console.log(`Example app 4 listening at http://localhost:${port4}`)
})

//App 5
app5.get('/', (req, res) => {
      res.send('Hello World 5!')
})

app5.listen(port5, () => {
      console.log(`Example app 5 listening at http://localhost:${port5}`)
})