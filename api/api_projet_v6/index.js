const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const queryPromise = require('./queryPromise');
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// controllers
const car = require("./controllers/car");
const brand = require("./controllers/brand");
car(app, queryPromise);
brand(app, queryPromise);


const port = 3000;

app.listen(port, function () {
  console.log(`server started :${port}`);
});
