const express = require('express');
const User = require("./model/User");
const app = express();
const PORT = 3001;
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/users', (req, res) => {
  res.render("users",{
   users: User.list()
  })
})

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});