const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
  db.query("SELECT * FROM transactions", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { book_id, user_id, type, quantity } = req.body;
  db.query(
    "INSERT INTO transactions (book_id, user_id, type, quantity) VALUES (?,?,?,?)",
    [book_id, user_id, type, quantity],
    (err) => {
      if (err) throw err;
      res.json({ message: "Transaction recorded!" });
    }
  );
});

module.exports = router;
