const express = require("express");
const app = express();
const Controllers = require("./controllers");

require("dotenv").config();

require("./dbConnect"); //example using Sequelize package
//require("./dbConnect_mysql2"); //example using mysql2 package

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Meals_MySQL application." });
});

let mealRoutes = require("./routes/mealRoutes");
app.use("/api/meals", mealRoutes); //sequelize

let categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/categories", categoryRoutes); //sequelize

let ingridientRoutes = require("./routes/ingridientRoutes");
app.use("/api/ingridients", ingridientRoutes); //sequelize

// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Controllers.mealController.storeMeals();
  Controllers.categoryController.storeCategories();
  Controllers.ingridientController.storeIngridients();
});
