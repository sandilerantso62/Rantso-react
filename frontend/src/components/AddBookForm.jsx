import React, { useState } from "react";

function AddBookForm({ onBookAdded }) {
  const [form, setForm] = useState({
    title: "", author: "", genre: "", isbn: "", quantity: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      onBookAdded();
      setForm({ title: "", author: "", genre: "", isbn: "", quantity: "" });
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} required />
      <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
