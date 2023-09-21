import { author } from '../models/Author.js';
import book from '../models/Book.js';

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
                res.status(404).json({message : 'book not found'});
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
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Book Updated: ${book.findById(id)}` });
        } catch (error) {
            next(error);
        }
    }
    static async deleteBookById(req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res
                .status(200)
                .json({ message: `book successfully deleted: ${book.findById(id)}` });
        } catch (error) {
            next(error);
        }
    }
    static async getBookByPublishingCompany(req, res, next) {
        const publishingCompany = req.query.publishingCompany;
        try {
            const bookByPublishingCompany = await book.find({
                publishingCompany: publishingCompany,
            });
            res.status(200).json({ book: bookByPublishingCompany });
        } catch (error) {
            next(error);
        }
    }
}

export default BookController;
