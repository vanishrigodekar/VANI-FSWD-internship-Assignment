const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "Java", author: "John" },
    { id: 2, title: "Node", author: "Alice" }
];

// GET all books
router.get("/", (req, res) => {
    res.json(books);
});

// GET book by ID
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book || { message: "Book not found" });
});

// POST new book
router.post("/", (req, res) => {
    books.push(req.body);
    res.json(req.body);
});

module.exports = router;