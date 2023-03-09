const express = require("express");
const app = express();
require("dotenv").config();
require("./dbConnect");

const Controllers = require("./controllers");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let gamesRoutes = require("./routes/gamesRoutes");
app.use("/api/games", gamesRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Controllers.gamesController.storeGames();
});
