const Product = require('../models/productModel')
const axios = require('axios');

const storeProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data;
    console.log(products)
    await Product.insertMany(products.products);
    console.log({ message: 'Products fetched successfully' });
  } catch (error) {
    console.error(error);
    console.log({ message: 'Error fetching products' });
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    console.log({ message: 'Error getting products' });
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      console.log({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    console.log({ message: 'Error getting product' });
  }
}

const createProduct = async (req, res) => {
  const { title, price, description, id, category,  } = req.body;
  try {
    const product = new Product({ title, price, description, id, category, });
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.json({ message: 'Error creating product' });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, category,} = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, { title, price, description, id, category,}, { new: true });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      console.log(product);
    }
  } catch (error) {
    console.error(error);
    res.send({ message: 'Error updating product' });
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      console.log({ message: 'Product not found' });
    } else {
      console.log(`Product ${id} deleted successfully`);
      res.send({ message: 'Product deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.send({ message: 'Error deleting product' });
  }
}

module.exports = {productController: {deleteProduct, createProduct, getProductById, getProducts, storeProducts, updateProduct}};
