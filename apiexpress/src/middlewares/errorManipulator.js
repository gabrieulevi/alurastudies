import mongoose from 'mongoose';
import BaseError from '../errors/BaseError.js';
import BadRequest from '../errors/BadRequest.js';
import ValidationError from '../errors/ValidationError.js';
import NotFound from '../errors/NotFound.js';

// eslint-disable-next-line no-unused-vars
function errorManipulator (error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        console.log('bad request');
        new BadRequest().sendResponse(res);
    } else if(error instanceof mongoose.Error.ValidationError){
        console.log(`validation error on ${req.method, req.url, req.body}`);
        new ValidationError(error).sendResponse(res); 
    } else if (error instanceof NotFound){
        console.log('instance of not found');
        error.sendResponse(res);
    } else {
        console.log('server error');
        new BaseError().sendResponse(res);
    }
}


export default errorManipulator;