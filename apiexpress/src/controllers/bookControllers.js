import { author } from '../models/Author.js';
import book from '../models/Book.js';

class BookController {
	static async listBooks(req, res) {
		try {
			const bookList = await book.find({});
			res.status(200).json(bookList);
		} catch (error) {
			res.status(500).json({ message: `requisition failure: ${error}` });
		}
	}
	static async listBookById(req, res) {
		try {
			const id = req.params.id;
			const fetchedBook = await book.findById(id);
			res.status(200).json(fetchedBook);
		} catch (error) {
			res
				.status(500)
				.json({
					message: `requisition failure while trying to get book: ${error}`,
				});
		}
	}
	static async bookPost(req, res) {
		const newBook = req.body;
		try {
			const foundAuthor = await author.findById(newBook.author);
			const fullBook = { ...newBook, author: { ...foundAuthor._doc } };
			const createdBook = await book.create(fullBook);
			res.status(201).json({ message: 'successfully created', book: createdBook });
		} catch (error) {
			res.status(500).json({ message: `couldnt create book -> ${error}` });
		}
	}
	static async updateBookById(req, res) {
		try {
			const id = req.params.id;
			await book.findByIdAndUpdate(id, req.body);
			res.status(200).json({ message: `Book Updated: ${book.findById(id)}` });
		} catch (error) {
			res
				.status(500)
				.json({
					message: `requisition failure while trying to get book: ${error}`,
				});
		}
	}
	static async deleteBookById(req, res) {
		try {
			const id = req.params.id;
			await book.findByIdAndDelete(id);
			res
				.status(200)
				.json({ message: `book successfully deleted: ${book.findById(id)}` });
		} catch (error) {
			res
				.status(500)
				.json({ message: `error while trying to delete book: ${error}` });
		}
	}
	static async getBookByPublishingCompany(req, res) {
		const publishingCompany = req.query.publishingCompany;
		try {
			const bookByPublishingCompany = await book.find({
				publishingCompany: publishingCompany,
			});
			res.status(200).json({ book: bookByPublishingCompany });
		} catch (error) {
			res
				.status(404)
				.json({ message: `error while trying to find book: ${error}` });
		}
	}
}

export default BookController;
