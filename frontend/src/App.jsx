import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookManagement from "./pages/BookManagement";
import Transactions from "./pages/Transactions";
import UserManagement from "./pages/UserManagement";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>DataBReact Working ✅</h1>
      <p>If you can see this, React is working.</p>
    </div>
  );
}

export default App;