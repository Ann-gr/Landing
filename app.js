const express = require("express");
const app = express();
app.set("view engine", "ejs");
const User = require("./model/User");
const { promos, priorities, managers, advantages } = require("./data/landing");
const PORT = 3001;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

//OLD VERSION

app.get("/home", (req, res) => {
  res.render("old/home", {
    promos: promos,
  });
});

app.get("/users", (req, res) => {
  res.render("old/users", {
    users: User.list(),
  });
});

app.get("/users/:id", (req, res) => {
  res.render("old/user", {
    user: User.getById(+req.params.id),
  });
});

app.get("/portfolio", (req, res) => {
  res.render("old/portfolio", {
    promos: promos,
    priorities: priorities,
    managers: managers,
    advantages: advantages,
  });
});

app.get("/about", (req, res) => {
  res.render("old/about");
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});

