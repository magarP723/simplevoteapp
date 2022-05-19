const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public/" });
});
router.post("/auth", (req, res) => {
  var tlk = req.body.token;
  if (tlk === "apple") {
    res.json({ isAuth: true });
  } else {
    res.json({ isAuth: false });
  }
});
router.get("/xyzopert", (req, res) => {
  res.render("voting-page", { username: "Prabesh" });
});

module.exports = router;
