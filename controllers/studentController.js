const studentModal = require("../modal/studentModal");
const path = require("path");
function homePage(req, res) {
  res.render("registerForm");
}

function displayStudents(req, res) {
  studentModal
    .find()
    .then((result) => res.render("studentsList", { students: result }))
    .catch((error) => res.send(error));
}

function editUser(req, res) {}
function deleteUser(req, res) {}

function addStudent(req, res) {
  console.log(req.body);
  console.log(req.files);
  const { image } = req.files;

  image.mv(
    path.resolve(__dirname, "../public/images/", image.name),
    (error) => {
      if (!error) {
        let newStudent = new studentModal({ ...req.body, image: image.name });
        newStudent
          .save()
          .then((result) => res.redirect("/students"))
          .catch((error) => res.send(error));
      }
    }
  );
}

module.exports = {
  homePage,
  addStudent,
  displayStudents,
  editUser,
  deleteUser,
};
