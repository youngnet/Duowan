var express = require("express");
var router = express.Router();

router.get("/getData", function(req, res, next) {
  res.send("hello world");
});

router.post("/comment", (req, res) => {
  console.log("comment");
  res.send("post success");
});

router.post("/collectArticle", (req, res) => {
  res.send("collect success");
});

module.exports = router;  
