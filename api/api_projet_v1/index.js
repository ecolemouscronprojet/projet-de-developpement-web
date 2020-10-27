const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

//MOCK
const cars = [
  { id: 1, brand: "peugeot", model: 508 },
  { id: 2, brand: "audi", model: "A4" },
  { id: 3, brand: "citroen", model: "berlingo" },
  { id: 4, brand: "opel", model: "astra" },
  { id: 5, brand: "toyota", model: "yaris" },
];


app.get("/api/cars", function (req, res) {
  res.json(cars);
});


app.get("/api/cars/:id", function (req, res) {
  const id = req.params.id;
  const car = cars.find(function (car) {
    return car.id == id;
  });

  if (car != undefined) {
    res.json(car);
  } else {
    res.status(404).json({ error: "Car not found !" });
  }
});

app.delete('/api/cars/:id', function(req, res) {
    const id = req.params.id;

    const index = cars.findIndex(function(car){
        return car.id == id;
    });

    if(index === -1) {
        res.status(404).json({ error: "Car not found !" });
    } else {
        cars.splice(index, 1);
        res.status(204).send();
    }
});


app.post("/api/cars", function (req, res) { 
  const car = req.body; // recuperation des données
  // RECHERCHER LE NOUVEL ID
  const newId = cars.reduce((acc, c) => {
    acc = acc < c.id ? c.id : acc;
    return acc; 
  }, 0) + 1;
  car.id = newId; // initialisation de l'ID
  cars.push(car); //Ajout dans le tableau
  res.send(true);
});

app.get("/", function (req, res) {
  res.send("Hello World ! YOOOO");
});


app.listen(port, function () {
  console.log(`server started :${port}`);
});
