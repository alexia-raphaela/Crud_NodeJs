import express from "express";
import useRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", useRoutes);

app.listen(8800, console.log("funcionando!"));