// app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index");
const flashcardRouter = require("./routes/flashcards");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/flashcards", flashcardRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
