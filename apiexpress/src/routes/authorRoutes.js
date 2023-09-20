import express from 'express';
import AuthorController from '../controllers/authorControllers.js';

const routes = express.Router();

routes.get('/author', AuthorController.listAuthors);
routes.get('/author/:id', AuthorController.listAuthorById);
routes.post('/author', AuthorController.authorPost);
routes.put('/author/:id', AuthorController.updateAuthorById);
routes.delete('/author/:id', AuthorController.deleteAuthorById);

export default routes;
