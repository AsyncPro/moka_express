import express from "express";
import Root_router from "./src/routes/root.router.js";

const app = express();

app.use(express.json());
app.use("/api", Root_router);

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
