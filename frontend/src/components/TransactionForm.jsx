import React, { useState } from "react";

function TransactionForm({ onTransactionAdded }) {
  const [form, setForm] = useState({ book_id: "", user_id: "", type: "borrow", quantity: 1 });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      onTransactionAdded();
      setForm({ book_id: "", user_id: "", type: "borrow", quantity: 1 });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="book_id" placeholder="Book ID" value={form.book_id} onChange={handleChange} required />
      <input name="user_id" placeholder="User ID" value={form.user_id} onChange={handleChange} required />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="borrow">Borrow</option>
        <option value="return">Return</option>
        <option value="stock_in">Stock In</option>
      </select>
      <input name="quantity" type="number" value={form.quantity} onChange={handleChange} required />
      <button type="submit">Record Transaction</button>
    </form>
  );
}

export default TransactionForm;
