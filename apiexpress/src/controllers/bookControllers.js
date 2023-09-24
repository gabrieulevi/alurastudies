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
                next(new NotFound('Book ID not found'));
            }else{
                res.status(200).json(fetchedBook);
            }
        } catch (error) {
            next(error);
        }
    }
    static async bookPost(req, res, next) {
        const newBook = req.body;
        const foundAuthor = await author.findById(newBook.author);
        try {
            if (foundAuthor){
                const fullBook = { ...newBook, author: { ...foundAuthor._doc } };
                const createdBook = await book.create(fullBook);
                res.status(201).json({ message: 'successfully created', book: createdBook });
            }else{
                const createdBook = await book.create(newBook);
                res.status(201).json({ message: 'successfully created', book: createdBook });
            }

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
    static async updateBookById(req, res, next) {
        try {
            const id = req.params.id;
            const fetchedBook = await book.findById(id);
            console.log(book);
            if (!fetchedBook) {
                next(new NotFound('book id not found'));
            } else {
                await book.findByIdAndUpdate(id, req.body);
                res
                    .status(200)
                    .json({ message: `book Updated: ${Object.values(await book.findById(id)).map(book => book.title).join('')}` });
            }
        } catch (error) {
            console.log(error.errors);
            next(error);
        }
    }
    static async deleteBookById(req, res, next) {
        try {
            const id = req.params.id;
            const fetchedBook = await book.findById(id);
            console.log(book);
            if (!fetchedBook) {
                next(new NotFound('book id not found'));
            } else {
                const bookTitle = Object.values(fetchedBook).map(book => book.title).join('');
                await book.findByIdAndDelete(id);
                res
                    .status(200)
                    .json({
                        message: `book with title ${bookTitle} successfully deleted`,
                    });
            }
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
