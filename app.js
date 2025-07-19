


import express from "express";
import dotenv from "dotenv";
import Root_router from "./src/routes/root.router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(express.json());
app.use("/api", Root_router);

app.get("/", (req, res) => {
  res.json({ app: "funcionando" });
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor corriendo en http://${HOST}:${PORT}`);
});
