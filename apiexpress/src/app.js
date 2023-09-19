import express from "express";
import dbConnection from "./config/dbConnect.js";
//import book from "./models/Book.js";
import routes from "./routes/index.js";

const con = await dbConnection();

con.on("error", (error) => {
  console.error(`Connection error: ${error}`);
});

con.once("open", () => {
  console.log("Database connection successfully made");
});

const app = express();
routes(app)
// app.use(express.json());
const books = [
  {
    id: 1,
    title: "O senhor dos ladrões",
  },
  {
    id: 2,
    title: "A morte de Ivan Ilitch",
  },
];

function getBook(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

// app.get("/", (req, res) => {
//   res.status(200).send("Hello world (home)");
//   console.log(req.url, res.status);
// });

// app.get("/books", async (req, res) => {
//   const bookList = await book.find({});
//   res.status(200).json(bookList);
// });

app.post("/books", (req, res) => {
  books.push(req.body);
  console.log(req.body);
  res.status(201).send("Book successfully created");
});

app.get("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  console.log(index);
  res.status(200).json(books[index]);
});

app.put("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = getBook(req.params.id);
  books.splice(index, 1);
  res.status(200).send(`${books[index]} successfully deleted`);
});
export default app;

//mongodb+srv://admin:<password>@cluster0.fy15gyy.mongodb.net/?retryWrites=true&w=majority
