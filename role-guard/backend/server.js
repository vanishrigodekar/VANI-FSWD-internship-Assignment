const express = require("express");
const cors = require("cors");

const app = express();   // ✅ MUST come first

app.use(cors());
app.use(express.json());

// Dummy users
const users = [
  { username: "admin", password: "123", role: "admin" },
  { username: "user", password: "123", role: "user" }
];

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(user);
});

// Role Guard Middleware
function roleGuard(role) {
  return (req, res, next) => {
    const user = req.query.role;

    if (user !== role) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
}

// Protected Routes
app.get("/admin", roleGuard("admin"), (req, res) => {
  res.send("Welcome Admin");
});

app.get("/user", roleGuard("user"), (req, res) => {
  res.send("Welcome User");
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));