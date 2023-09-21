import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
function errorManipulator (error, req, res, next) {
	if (error instanceof mongoose.Error.CastError) {
		res.status(400).send({message : 'One or more requisition parameters are incorrect'});
	} else if(error instanceof mongoose.Error.ValidationError){
		const errorMessage =  Object.values(error.errors).map(error => error.message).join('; ');
		res.status(400).json({message : 'errors were found while trying to get your request', errors: errorMessage});
	} else {
		res.status(500).json({
			message: `requisition failure while trying to get: ${error}`,
		});
	}
}


export default errorManipulator;