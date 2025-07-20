import { Router } from "express";
import { db } from "../db/conn.js";

const Root_router = Router();

Root_router.get("/productos", (req, res) => {
  db.query("SELECT * FROM productos_eventos", (err, results) => {
    console.log(results);
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

Root_router.get("/productos/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM productos_eventos WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });

      if (results.length === 0) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      res.json(results[0]);
    }
  );
});
export default Root_router;
