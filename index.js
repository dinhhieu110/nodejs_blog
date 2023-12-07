const express = require("express"); // Declare express library
const app = express(); // Call function express return an object and assigned to app variable
const port = 3000;

// Route
app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
