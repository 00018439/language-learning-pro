const service = require("../../services/flashcards");
const { validationResult } = require("express-validator");

exports.list = async (req, res) => {
  const cards = await service.getAll();
  res.render("flashcards/list", { cards });
};

exports.showCreate = (req, res) => {
  res.render("flashcards/create");
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("flashcards/create", { errors: errors.array() });
  }
  await service.create(req.body);
  res.redirect("/flashcards");
};

exports.showEdit = async (req, res) => {
  const card = await service.getById(req.params.id);
  res.render("flashcards/edit", { card });
};

exports.edit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("flashcards/edit", { card: req.body, errors: errors.array() });
  }
  await service.update(req.params.id, req.body);
  res.redirect("/flashcards");
};

exports.delete = async (req, res) => {
  await service.remove(req.params.id);
  res.redirect("/flashcards");
};
