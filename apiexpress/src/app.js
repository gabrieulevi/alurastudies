import express from 'express';
import dbConnection from './config/dbConnect.js';
import routes from './routes/index.js';
import errorManipulator from './middlewares/errorManipulator.js';
import pageNotFoundHandler from './middlewares/PageNotFoundHandler.js';

const con = await dbConnection();

con.on('error', (error) => {
    console.error(`Connection error: ${error}`);
});

con.once('open', () => {
    console.log('Database connection successfully made');
});

const app = express();
routes(app);
app.use(pageNotFoundHandler);
app.use(errorManipulator);

export default app;
