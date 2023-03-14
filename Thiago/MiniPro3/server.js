const express = require("express");
const app = express();
const Controllers = require("./controllers/breedsController");

require("dotenv").config();
require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

let breedsRoutes = require("./routes/breedsRoutes");
app.use("/api/breeds", breedsRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Controllers.breedsController.storeBreeds();
});
