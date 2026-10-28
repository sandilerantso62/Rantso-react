import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#007acc" }}>
      <Link to="/dashboard" style={{ margin: "0 10px", color: "white" }}>Dashboard</Link>
      <Link to="/books" style={{ margin: "0 10px", color: "white" }}>Books</Link>
      <Link to="/transactions" style={{ margin: "0 10px", color: "white" }}>Transactions</Link>
      <Link to="/users" style={{ margin: "0 10px", color: "white" }}>Users</Link>
    </nav>
  );
}

export default NavBar;
