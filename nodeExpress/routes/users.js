var express = require("express");
var router = express.Router();
var utils = require("./utils"),
  readFile = utils.readFile,
  writeFile = utils.writeFile;
// let md5 = require("blueimp-md5");
router.use(async (req, res, next) => {
  let { data, num } = await readFile("profile.json");
  req.num = num;
  req.data = data;
  next();
});
router.get("/userInfo", function(req, res, next) {
  let { id } = req.params;
  console.log(id);
  let result = req.data.find(item => item.id == id)
  console.log(result);
  res.send(result);
});

router.get("/isLogin", (req, res) => {
  res.send(req.session.loginId + "");
});
router.post("/login", (req, res) => {
  // req.body.pass = md5(req.body.pass);
  let isExit = req.data.find(item => {
    return item.name == req.body.name && item.pass == req.body.pass;
  });
  if (isExit) {
    req.session.loginId = isExit.id;
    res.send("ok");
  } else {
    res.send("sorry");
  }
});
router.post("/register", (req, res) => {
  // req.body.pass = md5(req.body.pass);
  let isExit = req.data.find(item => {
    return item.name == req.body.name;
  });
  if (isExit) {
    res.send("this account has already been registered");
  } else {
    req.body.id = ++req.num;
    req.data.push(req.body);
    writeFile("profile.json", { num: req.num, data: req.data })
      .then(data => {
        req.session.loginId = req.num;
        res.send("success");
      })
      .catch(e => {
        res.send("sorry");
      });
  }
});

module.exports = router;
