import React, { useState, useEffect } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ book_id: "", user_id: "", type: "borrow", quantity: 1 });

  const fetchTransactions = () => {
    fetch("http://localhost:5000/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      fetchTransactions();
      setForm({ book_id: "", user_id: "", type: "borrow", quantity: 1 });
    });
  };

  return (
    <div>
      <h1>Transactions</h1>
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
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            Book {tx.book_id} - User {tx.user_id} - {tx.type} ({tx.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
