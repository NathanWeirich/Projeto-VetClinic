const express = require("express");
const app = express();
const tutorRoutes = require("./routes/tutor.route");
const petRoutes = require("./routes/pet.route");
const connection = require("./config/database");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(tutorRoutes);
app.use(petRoutes);

connection
  .sync({ force: true })
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => console.log(error));
