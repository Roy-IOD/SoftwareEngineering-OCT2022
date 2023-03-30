const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let breweryRoutes = require("./routes/breweryRoutes");
app.use("/api/brewery", breweryRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
