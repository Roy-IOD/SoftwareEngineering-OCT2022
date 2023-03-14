const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect");

const Controllers = require("./controllers");

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let bookRoutes = require("./routes/bookRoutes");
app.use("/api/books", bookRoutes);

let fantasyRoutes = require("./routes/fantasyRoutes");
app.use("/api/fantasy", fantasyRoutes);

let authorRoutes = require("./routes/authorRoutes");
app.use("/api/authors", authorRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  Controllers.authorController.storeAuthors();
  Controllers.bookController.storeBooks();
  Controllers.fantasyController.storeFantasy();
});
