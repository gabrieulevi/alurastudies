import express from "express";

const app = express();
app.use(express.json())
const books = [
  {
    id: 1,
    title: "O senhor dos ladrões",
  },
  {
    id: 2,
    title: "A morte de Ivan Ilitch",
  }
];

app.get("/", (req, res) => {
  res.status(200).send("Hello world (home)");
  console.log(req.url, res.status);
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  console.log(req.body)
  res.status(201).send("Book successfully created")
})
export default app;
