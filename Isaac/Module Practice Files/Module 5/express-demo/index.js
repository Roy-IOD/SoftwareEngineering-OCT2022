const express = require('express')
const testRoute = require('./routes/myTestRoute');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/mytest', testRoute)

app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
})



