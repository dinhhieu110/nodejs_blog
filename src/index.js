const path = require("path");
const express = require("express"); // Declare express framework
const morgan = require("morgan"); // Declare morgan library
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const app = express(); // Call function express return an object and assigned to app variable
const port = 3000;

// Folder routes autimatically imports index.js file
const route = require("./routes");
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
app.use(
  express.urlencoded({
    extended: true,
  })
); // middleware xử lí submitform với method POST
app.use(express.json());
app.use(methodOverride("_method"));
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log(path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
