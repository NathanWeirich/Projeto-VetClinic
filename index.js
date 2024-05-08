const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

const Tutor = require("./models/Tutor");
const Pet = require("./models/Pet");

// Configuração do Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Middleware para fazer o parse do corpo das requisições
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

// Rota para renderizar a lista de tutores
app.get("/tutors", async (req, res) => {
  const tutors = await Tutor.findAll({ raw: true });

  res.render("tutors", { tutors: tutors });
});

app.get("/tutor", (req, res) => {
  res.render("addtutor");
});

// Rota para criar um novo tutor
app.post("/tutor", async (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const date_of_birth = req.body.date_of_birth;
  const zip_code = req.body.zip_code;

  await Tutor.create({ name, phone, email, date_of_birth, zip_code });

  res.redirect("/tutors");
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
