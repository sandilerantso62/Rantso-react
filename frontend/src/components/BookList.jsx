import React from "react";

function BookList({ books, onDelete, onUpdate }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th><th>Author</th><th>Genre</th><th>Quantity</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.quantity}</td>
            <td>
              <button onClick={() => onUpdate(book)}>Update</button>
              <button onClick={() => onDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
