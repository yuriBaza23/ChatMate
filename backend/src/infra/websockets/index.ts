import { Server } from "socket.io";
import http from "http"; 

export class WebSocketAPI {
  io: Server;

  constructor(httpServer: http.Server) {
    this.io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
    });
  }

  execute() {
    this.io.on("connection", (socket) => {
      console.log(`User connected on socket ${socket.id}`);
    });
  }
}