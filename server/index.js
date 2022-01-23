const express = require('express');
const path = require("path");
const app = express();
var bodyParser = require("body-parser");
sendMail = require("./MailRouter/MailerService");

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/confirmation", (req, res, next) => {
  sendMail(req.body)
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3002, () =>{
  console.log('Server is running on port 3002')
})
