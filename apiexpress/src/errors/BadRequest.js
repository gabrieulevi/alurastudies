import BaseError from './BaseError.js';

class BadRequest extends BaseError {
    constructor(message = 'Bad request: One or more requisition parameters are incorrect') {
        super(message, 400);
    }
}

export default BadRequest;