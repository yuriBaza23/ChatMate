import express from "express";
import { AppController } from "../controllers/app.controllers";

const appController = new AppController();

const appRoutes = express.Router();

appRoutes.get("/", appController.get);

export { appRoutes };
