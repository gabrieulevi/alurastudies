import express from "express";
import BookController from "../controllers/bookControllers.js";

const routes = express.Router();

routes.get("/books", BookController.listBooks);
routes.get("/books/:id", BookController.listBookById);
routes.post("/books", BookController.bookPost);
routes.put("/books/:id", BookController.updateBookById);
routes.delete("/books/:id", BookController.deleteBookById);

export default routes;