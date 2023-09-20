import { author } from '../models/Author.js';
// import mongoose from 'mongoose';

class AuthorController {
	static async listAuthors(req, res, next) {
		try {
			const fetchedAuthor = await author.find({});
			res.status(200).json(fetchedAuthor);
		} catch (error) {
			next(error);
		}
	}

	static async listAuthorById(req, res, next) {
		try {
			const id = req.params.id;
			const fetchedAuthor = await author.findById(id);
			if (!fetchedAuthor) {
				console.log(fetchedAuthor);
				res.status(400).json({message : 'author id not found'});
			} else {
				console.log(fetchedAuthor);
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
		try {
			const id = req.params.id;
			await author.findByIdAndUpdate(id, req.body);
			res
				.status(200)
				.json({ message: `Author Updated: ${author.findById(id)}` });
		} catch (error) {
			next(error);
		}
	}
	static async deleteAuthorById(req, res, next) {
		try {
			const id = req.params.id;
			await author.findByIdAndDelete(id);
			res
				.status(200)
				.json({
					message: `author successfully deleted: ${author.findById(id)}`,
				});
		} catch (error) {
			next(error);
		}
	}
}

export default AuthorController;
