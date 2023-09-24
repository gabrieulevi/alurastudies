import mongoose from 'mongoose';
import 'dotenv/config';

async function dbConnection() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default dbConnection;
