import BadRequest from './BadRequest.js';

class ValidationError extends BadRequest {
    constructor(error){
        const errorMessage =  Object.values(error.errors).map(error => error.message).join('; ');
        
        super({message: 'there was some errors found in your request', error: errorMessage});
    }
}

export default ValidationError;