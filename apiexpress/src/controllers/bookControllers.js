import book from "../models/Book.js";

class BookController {
    static async listBooks (req, res) {
        const bookList = await book.find({});
        res.status(200).json(bookList);
    }
    static async bookPost (req, res){
        try {
            const newBook = await book.create(req.body)
            res.status(201).json({ message : "successfully created", book : newBook})
        } catch (error) {
            res.status(500).json({message : `couldnt create book -> ${error}`})
        }
    }
}

export default BookController;
