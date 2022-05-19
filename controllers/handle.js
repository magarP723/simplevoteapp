var express = require("express");
var router = express.Router();
var login = require("./login");
// var register = require("./registration");

router.post("/login", login);

module.exports = router;
