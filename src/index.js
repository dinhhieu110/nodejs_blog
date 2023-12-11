const path = require("path");
const express = require("express"); // Declare express library
const morgan = require("morgan"); // Declare morgan library
const handlebars = require("express-handlebars");
const app = express(); // Call function express return an object and assigned to app variable
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
