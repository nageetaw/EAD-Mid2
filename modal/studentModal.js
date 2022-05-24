const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  region: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  image: { type: String, required: true },
});

const studentModal = mongoose.model("Student", studentSchema);
module.exports = studentModal;
