const express = require("express");
const studentController = require("../controllers/studentController");

const studentRoutes = express();

studentRoutes.get("/", studentController.homePage);
studentRoutes.post("/addStudent", studentController.addStudent);
studentRoutes.get("/students", studentController.displayStudents);
studentRoutes.get("/delete/:id", studentController.deleteUser);
studentRoutes.get("/edit/:id", studentController.editUser);
studentRoutes.post("/editStudent/:id", studentController.editUser_Post);
module.exports = studentRoutes;
