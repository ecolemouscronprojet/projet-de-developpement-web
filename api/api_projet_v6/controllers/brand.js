module.exports = function (app, queryPromise) {
  app.get("/api/brands", async (req, res) => {
    try {
      const brands = await queryPromise("select * from brand");
      res.json(brands);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: "Impossible to get brands." });
    }
  });

  // Récuperer une marque en particulier
  app.get("/api/brands/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const [brand] = await queryPromise("select * from brand where id = ? ", [
        id,
      ]);
      if (brand) {
        return res.json(brand);
      }
      res.status(404).json({ error: "Brand not found !" });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to get the current brand." });
    }
  });

  // Supprimer une marque
  app.delete("/api/brands/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await queryPromise("delete from brand where id = ?", [id]);
      if (result.affectedRows > 0) {
        return res.status(204).send();
      }
      return res.status(404).json({ error: "Brand not found !" });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to remove the current brand." });
    }
  });


  // Créer une marque
  app.post("/api/brands", async (req, res) => {
    const { name } = req.body; // recuperation des données
    try {
      const {
        insertId,
      } = await queryPromise("insert into brand (name) values (?)", [
        name,
      ]);
      if (insertId != null) {
        const [brand] = await queryPromise("select * from brand where id = ? ", [
          insertId,
        ]);
        if (brand) {
          return res.json(brand);
        }
        return res.status(404).json({ error: "Brand not found !" });
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: "Impossible to save the brand." });
    }
  });


  // Mettre à jour d'une marque
  app.post("/api/brands/:id", async (req, res) => {
    const id = req.params.id; //recuperer l'id

    const { name } = req.body; //récupérer les informations à mettre à jour

    try {
      const [brand] = await queryPromise("select * from brand where id = ? ", [id]);
      if (brand === null) {
        return res.status(404).json({ error: "Brand cannot be found." });
      }
      brand.name = name;
      const {
        affectedRows,
      } = await queryPromise("update brand set name = ? where id = ?", [
        brand.name,
        brand.id,
      ]);
      if (affectedRows == 0) {
        throw "update failed";
      }
      res.json(brand);
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: "Impossible to update the current brand." });
    }
  });

};
