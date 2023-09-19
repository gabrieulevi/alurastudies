import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const con = await dbConnection();

con.on("error", (error) => {
  console.error(`Connection error: ${error}`);
});

con.once("open", () => {
  console.log("Database connection successfully made");
});

const app = express();
routes(app);

function getBook(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

export default app;
