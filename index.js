import express from "express";
import bodyParser from "body-parser";

import moviesRoutes from "./routes/movies.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/movie", moviesRoutes);
app.get("/", (req, res) => res.send("Welcome to the movies API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));