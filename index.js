var express = require("express");
var app = express();
var cookie = require("cookie-parser");
const PORT = 5000;
var jwt = require("jsonwebtoken");

app.use(cookie());
app.use("/js", express.static(__dirname + "/public/js"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());

app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/handle.js"));
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
