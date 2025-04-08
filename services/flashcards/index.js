const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/database.sqlite");

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM flashcards", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM flashcards WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

exports.create = (data) => {
  const { word, translation, example } = data;
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO flashcards (word, translation, example) VALUES (?, ?, ?)",
      [word, translation, example],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
};

exports.update = (id, data) => {
  const { word, translation, example } = data;
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE flashcards SET word = ?, translation = ?, example = ? WHERE id = ?",
      [word, translation, example, id],
      function (err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });
};

exports.remove = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM flashcards WHERE id = ?", [id], function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
};
