import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
function errorManipulator (error, req, res, next) {
	if (error instanceof mongoose.Error.CastError) {
		res.status(400).send({message : 'One or more requisition parameters are incorrect'});
	} else {

		res.status(500).json({
			message: `requisition failure while trying to get: ${error}`,
		});
	}
}


export default errorManipulator;