import mongoose from 'mongoose';
import BaseError from '../errors/BaseError.js';
import BadRequest from '../errors/BadRequest.js';
import ValidationError from '../errors/ValidationError.js';
// import NotFound from '../errors/NotFound.js';

// eslint-disable-next-line no-unused-vars
function errorManipulator (error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        console.log('bad request', error);
        new BadRequest().sendResponse(res);
    } else if(error instanceof mongoose.Error.ValidationError){
        console.log(`validation error on ${error}`);
        new ValidationError(error).sendResponse(res); 
    } else if (error instanceof BaseError){
        console.log('instance of not found', error);
        error.sendResponse(res);
    } else {
        console.log('server error', error);
        new BaseError().sendResponse(res);
    }
}


export default errorManipulator;