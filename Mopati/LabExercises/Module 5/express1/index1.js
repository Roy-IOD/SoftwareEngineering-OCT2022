const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoute");

const app = express();
const port = 3000;

app.use("/", express.static("public"));

app.use("/calculator", calculatorRoutes);
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//stop here
