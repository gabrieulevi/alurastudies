import mongoose from 'mongoose';
import { AuthorSchema } from './Author.js';

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: { type: String, required: [true, 'the book name is required']},
        publishingCompany: { 
            type: String,
            required: [true, 'the publishingCompany is required'],
            enum: {
                values: ['editora1', 'editora2'],
                message: '{VALUE} is not allowed in publishing company'
            }
        },
        price: { type: Number },
        pages: { 
            type: Number,
            min: [10, 'The page number must be between 10 - 10000, you sent {VALUE} to me'],
            max: [10000, 'The page number must be between 10 - 10000, you sent {VALUE} to me']
        },
        author: AuthorSchema,
    },
    { versionKey: false }
);

const book = mongoose.model('books', bookSchema);

export default book;
