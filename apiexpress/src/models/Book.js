import mongoose from 'mongoose';
import { AuthorSchema } from './Author.js';

const bookSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        title: { type: String, required: [true, 'the book name is required']},
        publishingCompany: { 
            type: String, 
            required: [true, 'the publishing company is needed'],
            enum: {
                values: ['casa do codigo', 'alura', 'publishingCompany'],
                message: 'the publushing company {VALUE} is not allowed'
            }
        },
        price: { type: Number },
        pages: { type: Number,
            min: [10, 'the minimum page number is 10, you sent {VALUE}'],
            max: [1000, 'the max number of pages is 1000, you sent {VALUE}'] 
        },
        author: AuthorSchema,
    },
    { versionKey: false }
);

const book = mongoose.model('books', bookSchema);

export default book;
