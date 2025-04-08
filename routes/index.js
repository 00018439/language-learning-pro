const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Language Learner Pro" });
});

module.exports = router;
