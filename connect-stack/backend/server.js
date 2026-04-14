const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});