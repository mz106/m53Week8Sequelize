const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/books", addBook);

bookRouter.get("/books", getAllBooks);

module.exports = bookRouter;
