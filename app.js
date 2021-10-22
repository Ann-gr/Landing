const express = require("express");
const User = require("./model/User");
const app = express();
const PORT = 3001;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/users", (req, res) => {
  res.render("users", {
    users: User.list(),
  });
});

app.get("/users/:id", (req, res) => {
  res.render("user", {
    user: User.getById(+req.params.id),
  });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    promos: [
      {
        img: "/img/portfolio/promo-1.jpg",
      },
      {
        img: "/img/portfolio/promo-2.jpg",
      },
      {
        img: "/img/portfolio/promo-3.jpg",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});
