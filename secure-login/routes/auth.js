const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();


// 🔹 Signup
router.post('/signup', async (req, res) => {
    // your signup code
});


// 🔹 Login
router.post('/login', async (req, res) => {
    // your login code
});


// 🔹 IMPORT middleware (ADD HERE or TOP)
const auth = require('../middleware/authMiddleware');


// 🔹 Protected Route (ADD AT END)
router.get('/profile', auth, (req, res) => {
    res.json({ msg: "Welcome user", user: req.user });
});


module.exports = router;
