const express = require("express");
const cors = require("cors");
const db = require("./db/connection");

const app = express();
app.use(cors());
app.use(express.json());

// Books CRUD
app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/books", (req, res) => {
  const { title, author, genre, isbn, quantity } = req.body;
  db.query("INSERT INTO books (title, author, genre, isbn, quantity) VALUES (?,?,?,?,?)",
    [title, author, genre, isbn, quantity],
    (err) => {
      if (err) throw err;
      res.json({ message: "Book added!" });
    }
  );
});

// Users CRUD
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/users", (req, res) => {
  const { name, membership_id, role } = req.body;
  db.query("INSERT INTO users (name, membership_id, role) VALUES (?,?,?)",
    [name, membership_id, role],
    (err) => {
      if (err) throw err;
      res.json({ message: "User added!" });
    }
  );
});

// Transactions CRUD
app.post("/transactions", (req, res) => {
  const { book_id, user_id, type, quantity } = req.body;
  db.query("INSERT INTO transactions (book_id, user_id, type, quantity) VALUES (?,?,?,?)",
    [book_id, user_id, type, quantity],
    (err) => {
      if (err) throw err;
      res.json({ message: "Transaction recorded!" });
    }
  );
});

app.listen(5000, () => console.log("Server running on port 5000"));
