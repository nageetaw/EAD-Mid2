const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 3000;
const app = express();

app.set("view engine", "ejs");

const connectionString = process.env.MongoDBConnectionString;
mongoose.connect(connectionString, (error) => {
  if (!error) {
    console.log("connected to DB");
  } else {
    res.send(error);
  }
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", studentRoutes);

app.listen(PORT, () => console.log("server is listening"));
