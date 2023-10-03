// import BadRequest from '../errors/BadRequest.js';
import NotFound from '../errors/NotFound.js';
import { author } from '../models/index.js';
import { book } from '../models/index.js';

class BookController {
    static async listBooks(req, res, next) {
        try {
            const findBooks = book.find();
            req.result = findBooks;
            next();
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
        console.log(req.body);
        const newBook = req.body;
        try {
            let foundAuthor, fullBook;
            if (newBook.author){
                foundAuthor = await author.findById(newBook.author);
                fullBook = { ...newBook, author: { ...foundAuthor._doc } };
            } else {
                fullBook = newBook;
            }
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
    static async getBookByFilter(req, res, next) {
        const {publishingCompany, title, minpg, maxpg, aname} = req.query;
        let search = {};
        if (publishingCompany) search.publishingCompany = { $regex: publishingCompany, $options: 'i'};
        if (title) search.title = { $regex: title, $options: 'i'};
        if (minpg) search.pages = { $gte: minpg};
        if (maxpg) search.pages = { $lte: maxpg};
        if (aname) {
            const newAuthor = await author.findOne({
                name: aname
            });
            if(newAuthor){
                search.author = newAuthor;
            } else {
                search = undefined;
            } 
            

        }

        if (search){
            const fetchedResult = book.find(search).populate('author');
    
            console.log(fetchedResult);
            if(fetchedResult){
                
                req.result = fetchedResult;
                next();
                
            }else{
                next(new NotFound('book not found'));
            }
        } else {
            res.status(200).send([]);
        }
    }
}

export default BookController;
