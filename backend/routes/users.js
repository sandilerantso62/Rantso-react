const express = require("express");
const router = express.Router();
const db = require("../db/connection");

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { name, membership_id, role } = req.body;
  db.query(
    "INSERT INTO users (name, membership_id, role) VALUES (?,?,?)",
    [name, membership_id, role],
    (err) => {
      if (err) throw err;
      res.json({ message: "User added!" });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, membership_id, role } = req.body;
  db.query(
    "UPDATE users SET name=?, membership_id=?, role=? WHERE id=?",
    [name, membership_id, role, id],
    (err) => {
      if (err) throw err;
      res.json({ message: "User updated!" });
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM users WHERE id=?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "User deleted!" });
  });
});

module.exports = router;
