const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

const Tutor = require("./models/Tutor");
const Pet = require("./models/Pet");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.get("/tutor", (req, res) => {
  res.render("addtutor");
});

app.post("/tutor", function (req, res) {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const date_of_birth = req.body.date_of_birth;
  const zip_code = req.body.zip_code;
  Tutor.create({ name, phone, email, date_of_birth, zip_code })
    .then(res.redirect("/"))
    .catch((err) => console.log(err));
});

app.get("/", (req, res) => {
  res.render("home");
});

conn
  .sync({ force: true })
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
