let express = require("express"),
  app = express(),
  fs = require("fs"),
  path = require("path"),
  bodyParser = require("body-parser");
const port = 8888;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, e => {
  console.log(`${port} has been listened`);
});
