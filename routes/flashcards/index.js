const express = require("express");
const router = express.Router();
const controller = require("../../controllers/flashcards");
const { body } = require("express-validator");

router.get("/", controller.list);
router.get("/create", controller.showCreate);
router.post("/create", 
  body("word").notEmpty(), 
  body("translation").notEmpty(),
  controller.create
);

router.get("/:id/edit", controller.showEdit);
router.post("/:id/edit", 
  body("word").notEmpty(), 
  body("translation").notEmpty(),
  controller.edit
);

router.post("/:id/delete", controller.delete);

module.exports = router;
