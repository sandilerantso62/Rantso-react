import React, { useState } from "react";

function UserForm({ onUserAdded }) {
  const [form, setForm] = useState({ name: "", membership_id: "", role: "member" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      onUserAdded();
      setForm({ name: "", membership_id: "", role: "member" });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="membership_id" placeholder="Membership ID" value={form.membership_id} onChange={handleChange} required />
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="member">Member</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
