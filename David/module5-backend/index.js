const express = require('express')
const app1 = express()
// const app2 = express()
// const app3 = express()
const port1 = 3001
// const port2 = 3002
// const port3 = 3003


app1.get('/', (req, res) => {
    console.log(req)
 res.send('Hello World!')
})

// app2.get('/', (req, res) => {
//     res.send('hello world 2')
// })

// app3.get('/', (req, res) => {
//     res.send('hello world 3')
// })
app1.use('/', express.static('public'))

app1.listen(port1, () => {
 console.log(`Example app listening at http://localhost:${port1}`)
})



// app2.listen(port2, () => {
//     console.log(`Example app listening at http://localhost:${port2}`)
//    })

//    app3.listen(port3, () => {
//     console.log(`Example app listening at http://localhost:${port3}`)
//    })