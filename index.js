const express = require("express");
const app = express();
const path = require("path");
var port = 4000;

var server = app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
