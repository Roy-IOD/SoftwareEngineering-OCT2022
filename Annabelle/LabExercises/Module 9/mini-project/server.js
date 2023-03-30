let dbConnect = require("./dbConnect");
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const Controllers = require('./controllers/productController');

app.use(express.json());
app.use('/api/products', productRoutes);



app.listen(3000, () => {
  Controllers.productController.storeProducts()
  console.log('Server started on port 3000');
});