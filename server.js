
// constant variables that denote dependencies
const express = require('express');
const fs = require("fs");

//sets up express
const app = express();

const PORT = process.env.PORT || 3001;

// allows express to parse through data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/Assets", express.static("./Assets"));

//requires server to connect to html and api routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// starts the server up!
app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
  });