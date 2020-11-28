const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

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
  db.query("select * from car", function (error, result) {
    if (error) {
      return res.status(400).json({ error: "Impossible to get cars." });
    }

    res.json(result);
  });
});

// Récuperer une voiture en particulier
app.get("/api/cars/:id", function (req, res) {
  const id = req.params.id;

  db.query("select * from car where id = ? ", [id], function (error, result) {
    if (error) {
      return res
        .status(400)
        .json({ error: "Impossible to get the current car." });
    }

    const car = result.shift();

    if (car) {
      return res.json(car);
    }

    res.status(404).json({ error: "Car not found !" });
  });
});

// Supprimer une voiture
app.delete("/api/cars/:id", function (req, res) {
  const id = req.params.id;

//db.query('delete from car where id = ? ', [id], function (error, result) {
  db.query('delete from car where id = ? ', [id], (error, result) => {
    if (error) {
      return res
        .status(400)
        .json({ error: "Impossible to remove the current car." });
    }

    if(result.affectedRows > 0){
      return res.status(204).send();
    } 

    return res.status(404).json({ error: "Car not found !" });
  });
});

// Créer une voiture
app.post("/api/cars", function (req, res) {
  const car = req.body; // recuperation des données

  db.query('insert into car (brand, model) values (?, ?)', [car.brand, car.model], (error, result) => {
    if (error) {
      return res
        .status(400)
        .json({ error: "Impossible to save the car." });
    }
      const id = result.insertId;
      db.query("select * from car where id = ? ", [id], function (error, result) {
        if (error) {
          return res
            .status(400)
            .json({ error: "Impossible to get the car." });
        }
    
        const car = result.shift();
    
        if (car) {
          return res.json(car);
        }
    
        res.status(404).json({ error: "Car not found !" });
      });
  })

});

app.post("/api/cars/:id", function (req, res) {
  const id = req.params.id; //recuperer l'id
  const { brand, model } = req.body; //récupérer les informations à mettre à jour

  db.query("select * from car where id = ?", [id], function (error, result) {
    if (error) {
      return res
        .status(400)
        .json({ error: "Impossible to update the current car." });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Car cannot be found." });
    }

    const car = result[0];
    car.brand = brand;
    car.model = model;

    db.query(
      "update car set brand = ?, model = ? where id = ?",
      [car.brand, car.model, car.id],
      function (error, result) {
        if (error) {
          return res
            .status(400)
            .json({ error: "Impossible to update the current car." });
        }

        res.json(car);
      }
    );
  });
});

app.listen(port, function () {
  console.log(`server started :${port}`);
});
