const express = require('express');
const path = require("path");
const app = express();

const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3001, () =>{
  console.log('Server is running on port 3001')
})
