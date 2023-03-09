const express = require("express");
const app = express();

require("dotenv").config();
require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
