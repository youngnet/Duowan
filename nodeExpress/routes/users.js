var express = require("express");
var router = express.Router();

router.get("/userInfo", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/isLogin", (req, res) => {
  res.send("isLogin");
});
router.post("/login", (req, res) => {
  res.send("login");
});
router.post("/register", (req, res) => {
  res.send("register");
});

module.exports = router;
