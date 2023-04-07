import express from "express";
import http from "http"; 
import cors from "cors";
import { appRoutes } from "./routes/app.routes";

const app = express();
app.use(cors());

const server = http.createServer(app);

app.get("/", appRoutes);

server.listen(3333, () => console.log("Server is running on port 3333"));