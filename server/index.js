const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

app.get('/', (req,res) => {
  res.send('hello world')
});

app.get("/design", (req, res) => {
  res.send("Design Page");
});

app.listen(3001, () =>{
  console.log('Server is running on port 3001')
})
