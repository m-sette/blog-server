const express = require("express");
const app = express();
const db = require("./utils/db");

app.set("port", process.env.PORT || 8081);

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", async (req, res) => {
  let email = "j@d.com";
  try {
    let { rows } = await db.getUser(email);
    res.status(200).json(rows);
  } catch (e) {
    console.log("Error on the get user route", e);
  }
});

app.listen(app.get("port"), () =>
  console.log(`API Server Listening on port " ${app.get("port")}`)
);
