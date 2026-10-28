const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { title, author, genre, isbn, quantity } = req.body;
  db.query(
    "INSERT INTO books (title, author, genre, isbn, quantity) VALUES (?,?,?,?,?)",
    [title, author, genre, isbn, quantity],
    (err) => {
      if (err) throw err;
      res.json({ message: "Book added!" });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, genre, isbn, quantity } = req.body;
  db.query(
    "UPDATE books SET title=?, author=?, genre=?, isbn=?, quantity=? WHERE id=?",
    [title, author, genre, isbn, quantity, id],
    (err) => {
      if (err) throw err;
      res.json({ message: "Book updated!" });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM books WHERE id=?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Book deleted!" });
  });
});

module.exports = router;
