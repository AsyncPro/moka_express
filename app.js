import express from "express";
import dotenv from "dotenv";
import Root_router from "./src/routes/root.router.js";
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(express.json());
app.use("/api", Root_router);

app.use(
  cors({
    origin: "*", // o '*', pero mejor ser específico
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.json({ app: "funcionando" });
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor corriendo en http://${HOST}:${PORT}`);
});
