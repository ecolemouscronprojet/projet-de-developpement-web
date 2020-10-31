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

// Récuperer toutes les voitures
app.get("/api/cars", function (req, res) {
  res.json(cars);
});

// Récuperer une voiture en particulier
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

// Supprimer une voiture
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

// Créer une voiture
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


app.post('/api/cars/:id', function(req, res){
  const id = req.params.id; //recuperer l'id
  const { brand, model } = req.body;  //récupérer les informations à mettre à jour

  const car = cars.find(function(c) {
    return c.id == id;
  }); //récuperer la voiture à l'interieur du tableau

  if(car === undefined) { //vérifier que l'id existe dans le tableau cars
    res.status(404).json({error: 'car not found !'});
  } 

  car.brand = brand;//venir mettre à jour les informations de la voiture
  car.model = model;
  
  res.status(200).json(car)// renvoyer un JSON avec les informations de la voiture MAJ
});




app.listen(port, function () {
  console.log(`server started :${port}`);
});
