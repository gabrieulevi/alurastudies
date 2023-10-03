import NotFound from '../errors/NotFound.js';
import { author } from '../models/index.js';
// import mongoose from 'mongoose';

class AuthorController {
    static async listAuthors(req, res, next) {
        try {
            const fetchedAuthor = author.find();
            req.result = fetchedAuthor;
            next();
        } catch (error) {
            next(error);
        }
    }

    static async listAuthorById(req, res, next) {
        try {
            const id = req.params.id;
            const fetchedAuthor = await author.findById(id);
            if (!fetchedAuthor) {
                next(new NotFound('author ID not found'));
            } else {
                res.status(200).json(fetchedAuthor);
            }
        } catch (error) {
            next(error);
        }
    }
    static async authorPost(req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res
                .status(201)
                .json({ message: 'successfully created', author: newAuthor });
        } catch (error) {
            next(error);
        }
    }
    static async updateAuthorById(req, res, next) {
        const id = req.params.id;
        const fetchedAuthor = await author.findById(id);
        if (fetchedAuthor){
            try {
                await author.findByIdAndUpdate(id, req.body);
                res
                    .status(200)
                    .json({ message: `Author Updated: ${author.findById(id)}` });
            } catch (error) {
                next(error);
            }
        } else {
            next(new NotFound('author id not found'));
        }
    }
    static async deleteAuthorById(req, res, next) {
        const id = req.params.id;
        const fetchedAuthor = await author.findById(id);
        if (fetchedAuthor){
            try {
                await author.findByIdAndDelete(id);
                res
                    .status(200)
                    .json({
                        message: `author successfully deleted: ${author.findById(id)}`,
                    });
            } catch (error) {
                next(error);
            }
        } else {
            next(new NotFound('author id not found'));
        }
    }
}

export default AuthorController;
