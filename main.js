const express = require("express");
const app = express();
const PORT = 3000;
const data = require("./movies.json");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/homepage.ejs", { data });
});

app.get("/:genre", (req, res) => {
  const { genre } = req.params;
  const newData = data.filter((el) => el.genre === genre);

  const newData2 = newData[Math.floor(Math.random() * newData.length)];

  if (!newData) {
    return res.status(404).send("Movies Not Found !");
  }

  res.render("pages/aboutpage.ejs", { newData2 });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
