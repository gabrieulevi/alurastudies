import book from "../models/Book.js";

class BookController {
    static async listBooks (req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            res.status(500).json({message: `requisition failure: ${error}`})
        }
    }
    static async listBookById (req, res) {
        try {
            const id = req.params.id
            const book = await book.findById(id);
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({message: `requisition failure while trying to get book: ${error}`})
        }
    }
    static async bookPost (req, res){
        try {
            const newBook = await book.create(req.body)
            res.status(201).json({ message : "successfully created", book : newBook})
        } catch (error) {
            res.status(500).json({message : `couldnt create book -> ${error}`})
        }
    }
    static async updateBookById (req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Book Updated: ${book.findById(id)}`});
        } catch (error) {
            res.status(500).json({message: `requisition failure while trying to get book: ${error}`})
        }
    }
    static async deleteBookById (req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).json({message : `book successfully deleted: ${book.findById(id)}`})
        }catch(error){
            res.status(500).json({message : `error while trying to delete book: ${error}`})
        }
    }
}

export default BookController;
