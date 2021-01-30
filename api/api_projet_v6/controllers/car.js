
module.exports = function (app, queryPromise) {  // Récuperer toutes les voitures
  app.get("/api/cars", async (req, res) => {
    try {
      const cars = await queryPromise(
        "select c.*, b.name as brand_name from car as c inner join brand as b on b.id = c.brand_id"
        );
      res.json(cars);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: "Impossible to get cars." });
    }
  });

  // Récuperer une voiture en particulier
  app.get("/api/cars/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [car] = await queryPromise("select * from car where id = ? ", [id]);
      if (car) {
        return res.json(car);
      }
      res.status(404).json({ error: "Car not found !" });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to get the current car." });
    }
  });

  // Supprimer une voiture
  app.delete("/api/cars/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await queryPromise("delete from car where id = ?", [id]);
      if (result.affectedRows > 0) {
        return res.status(204).send();
      }
      return res.status(404).json({ error: "Car not found !" });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to remove the current car." });
    }
  });

  // Créer une voiture
  app.post("/api/cars", async (req, res) => {
    const { brand, model } = req.body; // recuperation des données
    try {
      const {
        insertId,
      } = await queryPromise("insert into car (brand, model) values (?, ?)", [
        brand,
        model,
      ]);
      if (insertId != null) {
        const [car] = await queryPromise("select * from car where id = ? ", [
          insertId,
        ]);
        if (car) {
          return res.json(car);
        }
        return res.status(404).json({ error: "Car not found !" });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: "Impossible to save the car." });
    }
  });

  // Mettre à jour une voiture
  app.post("/api/cars/:id", async (req, res) => {
    const id = req.params.id; //recuperer l'id

    const { brand, model } = req.body; //récupérer les informations à mettre à jour

    try {
      const [car] = await queryPromise("select * from car where id = ? ", [id]);
      if (car === null) {
        return res.status(404).json({ error: "Car cannot be found." });
      }
      car.brand = brand;
      car.model = model;
      const {
        affectedRows,
      } = await queryPromise("update car set brand = ?, model = ? where id = ?", [
        car.brand,
        car.model,
        car.id,
      ]);
      if (affectedRows == 0) {
        throw "update failed";
      }
      res.json(car);
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to update the current car." });
    }
  });
};
