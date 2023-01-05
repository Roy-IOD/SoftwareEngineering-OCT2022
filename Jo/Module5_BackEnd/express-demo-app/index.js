const express = require('express')
const testRoutes = require('./routes/myTestRoutes');
const helloRoutes = require('./routes/hello.routes');
const catfactsRoutes = require('./routes/catfacts.routes');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/mytest', testRoutes);
app.use('/myhello', helloRoutes);
app.use('/catfacts', catfactsRoutes);
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
