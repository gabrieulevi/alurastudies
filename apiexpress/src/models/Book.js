import mongoose from 'mongoose';
import { AuthorSchema } from './Author.js';

const bookSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		title: { type: String, required: true },
		publishingCompany: { type: String },
		price: { type: Number },
		pages: { type: Number },
		author: AuthorSchema,
	},
	{ versionKey: false }
);

const book = mongoose.model('books', bookSchema);

export default book;
