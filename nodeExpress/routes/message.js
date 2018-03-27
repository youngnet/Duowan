var express = require("express");
var router = express.Router();
var readFile = require("./utils").readFile;

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
router.get("/rankData", async (req, res) => {
  let { id } = req.query || 0;
  if (id) {
    let data = (await readFile("rankData.json")).find(item => item.id == id);
    res.send(data);
  } else {
    let data = await readFile("rankData.json");
    res.send(data);
  }
});

module.exports = router;
