import express from "express";
import http from "http"; 
import cors from "cors";
import { appRoutes } from "./routes/app.routes";
import { WebSocketAPI } from "./websockets";

const app = express();
app.use(cors());
const server = http.createServer(app);

// Socket
const webSocket = new WebSocketAPI(server);
webSocket.execute();

// Routes
app.get("/", appRoutes);

// Listen
server.listen(3333, () => console.log("Server is running on port 3333"));