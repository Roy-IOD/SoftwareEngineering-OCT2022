const express = require('express')
const app = express()
const port = 3000

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