const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const books = require("./routes/books");
const authors = require("./routes/authors");

// Use routes
app.use("/books", books);
app.use("/authors", authors);

// Home route
app.get("/", (req, res) => {
    res.send("Route Master API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});