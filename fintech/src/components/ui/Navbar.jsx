import * as React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/HomePage">Home Page</Link>
      <Link to="/Chatbot">Chatbot</Link>
      <Link to="/Account">Account</Link>
    </nav>
  );
}

 
