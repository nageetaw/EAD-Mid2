const express = require("express");
const studentController = require("../controllers/studentController");

const studentRoutes = express();

studentRoutes.get("/", studentController.homePage);
studentRoutes.post("/addStudent", studentController.addStudent);
studentRoutes.post("/students", studentController.displayStudents);
studentRoutes.get("/delete/:id", studentController.deleteUser);
studentRoutes.get("/edit/:id", studentController.editUser);
module.exports = studentRoutes;
