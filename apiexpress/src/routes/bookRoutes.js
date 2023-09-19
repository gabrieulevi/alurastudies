import express from "express";
import BookController from "../controllers/bookControllers.js";

const routes = express.Router();

routes.get("/books", BookController.listBooks);

export default routes;