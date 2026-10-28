import React, { useState, useEffect } from "react";
import AddBookForm from "../components/AddBookForm";

function BookManagement() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Management</h1>
      <AddBookForm onBookAdded={fetchBooks} />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookManagement;
