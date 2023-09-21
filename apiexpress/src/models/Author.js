import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		name: { type: String, required: [true, 'the author name is required'] },
		nationality: { type: String },
	},
	{ versionKey: false }
);

const author = mongoose.model('author', AuthorSchema);

export { author, AuthorSchema };
