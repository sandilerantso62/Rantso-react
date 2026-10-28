import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Library Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Genre</th><th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} className={book.quantity < 2 ? "low-stock" : ""}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
