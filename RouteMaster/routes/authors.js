const express = require("express");
const router = express.Router();

let authors = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" }
];

// GET authors
router.get("/", (req, res) => {
    res.json(authors);
});

// POST author
router.post("/", (req, res) => {
    authors.push(req.body);
    res.json(req.body);
});

module.exports = router;