const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");
// const Book = require("../model/Book");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;

// router.get("/", async (req, res, next) => {
//   let books;
//   try {
//     books = await Book.find();
//   } catch (error) {
//     console.log(error);
//   }

//   if (!books) {
//     return res.status(404).json({ message: "No products found!" });
//   }
//   return res.status(200).json({ books });
// });
