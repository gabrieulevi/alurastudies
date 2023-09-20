import { author } from '../models/Author.js';

class AuthorController {
	static async listAuthors(req, res) {
		try {
			const authorList = await author.find({});
			res.status(200).json(authorList);
		} catch (error) {
			res.status(500).json({ message: `requisition failure: ${error}` });
		}
	}

	static async listAuthorById(req, res) {
		try {
			const id = req.params.id;
			const fetchedAuthor = await author.findById(id);
			res.status(200).json(fetchedAuthor);
		} catch (error) {
			res
				.status(500)
				.json({
					message: `requisition failure while trying to get author: ${error}`,
				});
		}
	}
	static async authorPost(req, res) {
		try {
			const newAuthor = await author.create(req.body);
			res
				.status(201)
				.json({ message: 'successfully created', author: newAuthor });
		} catch (error) {
			res.status(500).json({ message: `couldnt create author: ${error}` });
		}
	}
	static async updateAuthorById(req, res) {
		try {
			const id = req.params.id;
			await author.findByIdAndUpdate(id, req.body);
			res
				.status(200)
				.json({ message: `Author Updated: ${author.findById(id)}` });
		} catch (error) {
			res
				.status(500)
				.json({
					message: `requisition failure while trying to get author: ${error}`,
				});
		}
	}
	static async deleteAuthorById(req, res) {
		try {
			const id = req.params.id;
			await author.findByIdAndDelete(id);
			res
				.status(200)
				.json({
					message: `author successfully deleted: ${author.findById(id)}`,
				});
		} catch (error) {
			res
				.status(500)
				.json({ message: `error while trying to delete author: ${error}` });
		}
	}
}

export default AuthorController;
