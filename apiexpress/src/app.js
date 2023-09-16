import express from "express";

const app = express();

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

app.get("/", (req, res) => {
  res.status(200).send("Hello world (home)");
  console.log(req.url, res);
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});
export default app;
