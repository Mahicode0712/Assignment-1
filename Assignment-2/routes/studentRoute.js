const express = require("express");
const router = express.Router();

const students = require("../data/student");

//gets the all students
router.get("/", (req, res) => {
    res.status(200).json(students);
});


// get student by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});


//adds new student to the list of students
router.post("/", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name: name,
        course: course
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});


//this updates the students
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find((student) => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: "Name and course are required"
        });
    }

    student.name = name;
    student.course = course;

    res.status(200).json({
        message: "Student updated successfully",
        student: student
    });
});


//this deletes the students
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});


module.exports = router;