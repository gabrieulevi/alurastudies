import BaseError from './BaseError.js';

class NotFound extends BaseError{
    constructor(message = 'Não encontrado'){
        super(message, 404);
    }
}

export default NotFound; 