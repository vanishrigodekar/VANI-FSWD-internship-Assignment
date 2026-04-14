const express = require("express");
const mongoose = require("mongoose");

// Model import (you already pasted this 👍)
const Student = require("./model");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/crudDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* ---------------- CRUD ROUTES ---------------- */

// CREATE
app.post("/create", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Created");
});

// READ ALL
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// READ BY ID
app.get("/student/:id", async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

// SERVER START
app.listen(3000, () => {
    console.log("Server running on port 3000");
});