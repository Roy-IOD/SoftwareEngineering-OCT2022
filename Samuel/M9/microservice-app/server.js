const express = require("express");
const app = express();

require("dotenv").config();

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let nbaRoutes = require("./routes/nbaRoutes");
app.use("/api/nba", nbaRoutes); //sequelize

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
