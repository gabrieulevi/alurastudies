import mongoose from 'mongoose';
import 'dotenv/config';

async function dbConnection() {
	console.log(process.env.DB_CONNECTION_STRING);
	mongoose.connect(process.env.DB_CONNECTION_STRING);

	return mongoose.connection;
}

export default dbConnection;
