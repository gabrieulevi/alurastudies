import NotFound from '../errors/NotFound.js';
import { author } from '../models/index.js';
import { book } from '../models/index.js';

class BookController {
    static async listBooks(req, res, next) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            next(error);
        }
    }
    static async listBookById(req, res, next) {
        
        try {
            const id = req.params.id;
            const fetchedBook = await book.findById(id);
            if (!fetchedBook){
                next(new NotFound('book id not found'));
            }else{
                res.status(200).json(fetchedBook);
            }
        } catch (error) {
            next(error);
        }
    }
    static async bookPost(req, res, next) {
        const newBook = req.body;
        try {
            const foundAuthor = await author.findById(newBook.author);
            const fullBook = { ...newBook, author: { ...foundAuthor._doc } };
            const createdBook = await book.create(fullBook);
            res.status(201).json({ message: 'successfully created', book: createdBook });
        } catch (error) {
            next(error);
        }
    }
    static async updateBookById(req, res, next) {
        const id = req.params.id;
        const fetchedBook = await book.findById(id);
        if (fetchedBook){
            try {
                await book.findByIdAndUpdate(id, req.body);
                res.status(200).json({ message: `Book Updated: ${book.findById(id)}` });
            } catch (error) {
                next(error);
            }
        }else{
            next(new NotFound('book id not found'));
        }
    }
    static async deleteBookById(req, res, next) {
        const id = req.params.id;
        const fetchedBook = await book.findById(id);
        if (fetchedBook){
            try {
                const id = req.params.id;
                await book.findByIdAndDelete(id);
                res
                    .status(200)
                    .json({ message: `book successfully deleted: ${book.findById(id)}` });
            } catch (error) {
                next(error);
            }
        } else {
            next(NotFound('book not found'));
        }
    }
    static async getBookByPublishingCompany(req, res, next) {
        const publishingCompany = req.query.publishingCompany;
        const bookByPublishingCompany = await book.find({
            publishingCompany: publishingCompany,
        });
        if(bookByPublishingCompany){
            try {
                res.status(200).json({ book: bookByPublishingCompany });
            } catch (error) {
                next(error);
            }
        }else{
            next(new NotFound('book not found'));
        }
    }
}

export default BookController;
